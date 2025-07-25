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
    label: "Positioning & Narrative Building",
    description:
      "We turn your technical edge into a clear, compelling story your users (and investors) understand - fast.",
  },
  {
    label: "Content and Distribution",
    description:
      "From explainers to founder-driven posts, we create content loops that drive awareness, trust, and signups.",
  },
  {
    label: "Precise User Acquisition",
    description:
      "No broad targeting, We help you zero in on the ICP that will grow with you and convert.",
  },
  {
    label: "Community Growth & Marketing",
    description:
      "We design and run early growth experiments to find what moves the needle.",
  },
  {
    label: "Product-Market Fit Signalling",
    description:
      "We help you track the right GTM metrics so you can iterate quickly and prove traction before you run out of runway.",
  },
];

export const Tree: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);
  const mobileFeatureRefs = useRef<React.RefObject<HTMLDivElement | null>[]>([]);
  const [width, setWidth] = useState<number>(0);

  // Initialize refs on first render
  useEffect(() => {
    rightCardRefs.current = rightNodes.map(() =>
      React.createRef<HTMLDivElement>()
    );
    mobileFeatureRefs.current = rightNodes.map(() =>
      React.createRef<HTMLDivElement>()
    );
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

  const totalHeight =
    rightNodes.length * CARD_HEIGHT + (rightNodes.length - 1) * VERTICAL_GAP;
  const leftY = totalHeight / 2 - CARD_HEIGHT / 2;
  const isMobile = width < 768;

  const LEFT_X = (width - CARD_WIDTH * 2 - 200) / 2;
  const RIGHT_X = LEFT_X + CARD_WIDTH + 200;

  if (isMobile) {
    return (
      <section
        ref={containerRef}
        suppressHydrationWarning={true}
        className="flex flex-col items-center space-y-6 py-8 px-4 relative"
      >
        {/* Varnan header card - no connections to this */}
        <div className="w-full max-w-md rounded-2xl shadow-lg bg-white p-6 text-center border-2 border-gray-300">
          <h2 className="text-balance text-3xl font-bold leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Varnan
          </h2>
        </div>
        
        {/* Feature cards with references for connections */}
        {rightNodes.map(({ label, description }, index) => (
          <div
            key={label}
            ref={mobileFeatureRefs.current[index]}
            className="w-full max-w-md bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-gray-200 relative"
          >
            <h3 className="text-base font-semibold mb-1 break-words text-balance text-center">
              {label}
            </h3>
            <p className="text-base text-gray-600 text-center">{description}</p>
            
            {/* Add direct SVG connection line to next card (except last card) */}
            {index < rightNodes.length - 1 && (
              <div className="absolute left-1/2 bottom-0 h-6 bg-gray-500" style={{ transform: 'translateX(-50%)', bottom: '-26px',  width: '2px'}} />
            )}
          </div>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-8 px-4"
      style={{ height: `calc(${totalHeight}px + 30px)` }}
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
        <h2 className="text-4xl font-semibold">Varnan</h2>
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
            <h3 className="text-lg font-semibold text-center">{label}</h3>
            <p className="text-sm text-gray-600 text-center">{description}</p>
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
    </section>
  );
};