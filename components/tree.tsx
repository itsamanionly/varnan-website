"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatedBeam } from "./ui/animated-beam";

const CARD_WIDTH = 380;
const CARD_HEIGHT = 120;
const VERTICAL_GAP = 24;

const rightNodes = [
  {
    label: "Positioning & Narrative Building:",
    description:
      "Crafting compelling stories that resonate with your target audience.",
  },
  {
    label: "Content Marketing:",
    description:
      "Developing engaging content across blogs, social media, and explainer videos.",
  },
  {
    label: "User Acquisition Strategy:",
    description:
      "Designing and executing campaigns to attract and retain users.",
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

export const MaterialFanOutDiagram = () => {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRefs = useRef(rightNodes.map(() => React.createRef()));
  const [width, setWidth] = useState(0);

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

  const totalHeight =
    rightNodes.length * CARD_HEIGHT + (rightNodes.length - 1) * VERTICAL_GAP;
  const leftY = totalHeight / 2 - CARD_HEIGHT / 2;
  const isMobile = width < 768;

  if (isMobile) {
    return (
      <div ref={containerRef} suppressHydrationWarning={true} className="flex flex-col items-center space-y-6 py-8 px-4">
        <div className="w-full max-w-md rounded-2xl shadow-lg bg-white p-6 text-center border-2 border-gray-300">
          <h2 className="text-balance font-semibold tracking-tighter">Varnan</h2>
        </div>
        {rightNodes.map(({ label, description }) => (
          <div
            key={label}
            className="w-full max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-gray-200"
          >
            <h3 className="text-base font-semibold mb-1 leading-snug break-words text-balance">{label}</h3>
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
        className="absolute flex items-center justify-center rounded-2xl shadow-lg bg-white px-6 text-center border-2 border-gray-200"
        style={{
          width: CARD_WIDTH,
          minHeight: CARD_HEIGHT,
          left: LEFT_X,
          top: leftY,
        }}
      >
        <h2 className="text-3xl font-semibold">Service Highlights:</h2>
      </div>

      {rightNodes.map(({ label, description }, i) => {
        const top = i * (CARD_HEIGHT + VERTICAL_GAP);
        return (
          <div
            key={label}
            ref={rightCardRefs.current[i]}
            className="absolute bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer px-6 py-4 border-2 border-gray-200"
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

      {/* Animated Beams */}
      {rightCardRefs.current.map((rightCardRef, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={leftCardRef}
          toRef={rightCardRef}
          curvature={100}
          pathColor="#c6c9cc"
          pathWidth={3}
          pathOpacity={0.3}
          gradientStartColor="#000"
          gradientStopColor="#000"
          delay={i * 0.2}
          duration={3 + i * 0.5}
        />
      ))}
    </div>
  );
};
