"use client";

import React, { RefObject, useEffect, useId, useState, useCallback } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  mobilePathWidth?: number;
  tabletPathWidth?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className = "",
  containerRef,
  fromRef,
  toRef,
  curvature = 50,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "black",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  mobilePathWidth,
  tabletPathWidth,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [animationProgress, setAnimationProgress] = useState(0);
  const [responsivePathWidth, setResponsivePathWidth] = useState(pathWidth);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle responsive path width based on screen size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update path width based on screen size
  useEffect(() => {
    // Default to the prop value
    let width = pathWidth;

    // Mobile first approach (smallest to largest)
    if (mobilePathWidth !== undefined && windowWidth < 640) {
      width = mobilePathWidth;
    } else if (tabletPathWidth !== undefined && windowWidth < 1024) {
      width = tabletPathWidth;
    }

    setResponsivePathWidth(width);
  }, [windowWidth, pathWidth, mobilePathWidth, tabletPathWidth]);

  // Animate progress for gradient shift
  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const totalDuration = (delay + duration) * 1000;
      const modElapsed = elapsed % totalDuration;

      const progress =
        modElapsed > delay * 1000
          ? (modElapsed - delay * 1000) / (duration * 1000)
          : 0;

      setAnimationProgress(progress);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [delay, duration]);

  // Calculate dynamic curvature based on screen size and element positions
  const calculateDynamicCurvature = useCallback((deltaY: number, screenWidth: number) => {
    // Base curvature adjusted by screen width
    const baseCurvature = Math.min(curvature, screenWidth * 0.1);
    
    if (Math.abs(deltaY) < 10) {
      return 0; // Straight line for small vertical differences
    } else if (deltaY > 0) {
      return -Math.min(baseCurvature, Math.abs(deltaY)); // Curve upward
    } else {
      return Math.min(baseCurvature, Math.abs(deltaY)); // Curve downward
    }
  }, [curvature]);

  // Update beam path and SVG size dynamically
  const updatePath = useCallback(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rectA = fromRef.current.getBoundingClientRect();
    const rectB = toRef.current.getBoundingClientRect();

    const svgWidth = containerRect.width;
    const svgHeight = containerRect.height;
    setSvgDimensions({ width: svgWidth, height: svgHeight });

    // Calculate positions with offsets
    const startX = rectA.left - containerRect.left + rectA.width + startXOffset;
    const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;

    const endX = rectB.left - containerRect.left + endXOffset;
    const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    // Calculate deltaY for curvature
    const deltaY = endY - startY;
    
    // Calculate horizontal distance to adjust curvature proportionally
    const horizontalDistance = endX - startX;
    const currentScreenWidth = window.innerWidth;

    // Get dynamic curvature based on current screen size
    const dynamicCurvature = calculateDynamicCurvature(deltaY, currentScreenWidth);

    // Adjusted control points based on screen size
    const controlPointX = startX + horizontalDistance / 2;
    const controlPointY = startY + deltaY / 2 + dynamicCurvature;

    // Create path with quadratic Bézier curve
    const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
    setPathD(d);
  }, [
    containerRef,
    fromRef,
    toRef,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    calculateDynamicCurvature,
  ]);

  // Set up resize observer and event listeners
  useEffect(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const resizeObserver = new ResizeObserver(() => {
      // Use requestAnimationFrame to limit update frequency and improve performance
      requestAnimationFrame(updatePath);
    });

    // Observe container and both reference elements
    resizeObserver.observe(containerRef.current);
    resizeObserver.observe(fromRef.current);
    resizeObserver.observe(toRef.current);

    // Also update on scroll to handle position changes
    const handleScroll = () => {
      requestAnimationFrame(updatePath);
    };

    // Update on window resize for responsive behavior
    const handleResize = () => {
      requestAnimationFrame(updatePath);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initial path update
    updatePath();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updatePath]);

  // Calculate gradient position for animation
  const getGradientPosition = () => {
    const start = reverse ? 90 : 10;
    const end = reverse ? -10 : 110;
    const x1 = start + (end - start) * animationProgress;
    const x2 = reverse ? x1 - 10 : x1 + 10;
    return { x1: `${x1}%`, x2: `${x2}%`, y1: "0%", y2: "0%" };
  };

  const gradient = getGradientPosition();

  return (
    <svg
      className={`pointer-events-none absolute left-0 top-0 transform-gpu z-0 ${className}`}
      width="100%"
      height="100%"
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{
        position: "absolute",
        overflow: "visible",
      }}
      aria-hidden="true"
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={responsivePathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={responsivePathWidth}
        strokeOpacity={1}
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" {...gradient}>
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};