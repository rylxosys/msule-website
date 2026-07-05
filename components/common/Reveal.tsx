// components/common/reveal.tsx
"use client";

import { motion, useInView, Variants } from "framer-motion";
import {
  useRef,
  ReactNode,
  Children,
  cloneElement,
  isValidElement,
} from "react";

type RevealVariant =
  "fadeUp" | "fadeDown" | "slideLeft" | "slideRight" | "zoomIn" | "flip";

const VARIANTS: Record<RevealVariant, Variants> = {
  fadeUp: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  fadeDown: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  slideLeft: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: -40, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
};

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const v = VARIANTS[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={
        isInView
          ? { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }
          : { duration: 0.3, ease: "easeOut" }
      }
      style={{ transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered container — for card grids. Each direct child fades in
// one after another instead of all at once.
export function RevealStagger({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 28, scale: 0.96 }
            }
            transition={
              isInView
                ? {
                    duration: 0.5,
                    delay: i * staggerDelay,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }
                : { duration: 0.2 }
            }
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
