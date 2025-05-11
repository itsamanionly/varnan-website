"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatedBeam } from "./ui/animated-beam";

const CARD_WIDTH = 380;
const CARD_HEIGHT = 120;
const VERTICAL_GAP = 24;

type RightNode = {
  label: string;
  description: string;
};

const rightNodes: RightNode[] = [
  {
    label: "Positioning & Narrative Building:",
    description: "Crafting compelling stories that resonate with your target audience.",
  },
  {
    label: "Content Marketing:",
    description: "Developing engaging content across blogs, social media, and explainer videos.",
  },
  {
    label: "User Acquisition Strategy:",
    description: "Designing and executing campaigns to attract and retain users.",
  },
  {
    label: "Community Growth & Developer Marketing:",
    description: "Building vibrant communities around your product.",
  },
  {
    label: "Product-Market Fit Advisory:",
    description: "Guiding you to align your product with market needs.",
  },
];

export const Tree: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);
  const [width, setWidth] = useState<number>(0);

  // Initialize rightCardRefs on first render
  useEffect(() => {
  rightCardRefs.current = rightNodes.map(() => React.createRef<HTMLDivElement>());
}, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const totalHeight = rightNodes.length * CARD_HEIGHT + (rightNodes.length - 1) * VERTICAL_GAP;
  const leftY = totalHeight / 2 - CARD_HEIGHT / 2;
  const isMobile = width < 768;

  if (isMobile) {
    return (
      <div
        ref={containerRef}
        suppressHydrationWarning={true}
        className="flex flex-col items-center space-y-6 py-8 px-4"
      >
        <div className="w-full max-w-md rounded-2xl shadow-lg bg-white p-6 text-center border-2 border-gray-300">
          <h2 className="text-balance text-3xl font-semibold leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ">Varnan</h2>
        </div>
        {rightNodes.map(({ label, description }) => (
          <div
            key={label}
            className="w-full max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-gray-200"
          >
            <h3 className="text-base font-semibold mb-1 leading-snug break-words text-balance">
              {label}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    );
  }

  const LEFT_X = (width - CARD_WIDTH * 2 - 200) / 2;
  const RIGHT_X = LEFT_X + CARD_WIDTH + 200;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: totalHeight }}
    >
      <div
        ref={leftCardRef}
        className="absolute flex items-center justify-center rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white px-6 text-center border-2 border-gray-200"
        style={{
          width: CARD_WIDTH,
          minHeight: CARD_HEIGHT,
          left: LEFT_X,
          top: leftY,
        }}
      >
        <h2 className="text-3xl font-semibold">Varnan</h2>
      </div>

      {rightNodes.map(({ label, description }, i) => {
        const top = i * (CARD_HEIGHT + VERTICAL_GAP);
        const ref = rightCardRefs.current[i];
        return (
          <div
            key={label}
            ref={ref}
            className="absolute bg-white rounded-2xl shadow-md hover:shadow-xl transition-all px-6 py-4 border-2 border-gray-200"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              left: RIGHT_X,
              top,
            }}
          >
            <h3 className="text-lg font-semibold mb-2">{label}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        );
      })}

      {rightCardRefs.current.map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={leftCardRef}
          toRef={ref}
          curvature={100}
          pathColor="#c6c9cc"
          pathWidth={3}
          pathOpacity={0.5}
          gradientStartColor="#000"
          gradientStopColor="#000"
          delay={i * 0.2}
          duration={3 + i * 0.5}
        />
      ))}
    </div>
  );
};