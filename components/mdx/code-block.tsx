"use client";

import { useState, useRef } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export const CodeBlock = ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (preRef.current) {
      const codeText = preRef.current.innerText;
      try {
        await navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text", err);
      }
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 z-10 p-2 rounded bg-gray-800/50 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <FaCheck className="w-4 h-4 text-green-400" /> : <FaCopy className="w-4 h-4" />}
      </button>
      <pre ref={preRef} {...props}>
        {children}
      </pre>
    </div>
  );
};
