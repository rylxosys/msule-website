// components/common/scroll-hint.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollHint({
  label = "Scroll to explore",
}: {
  label?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16 flex flex-col items-center gap-2 text-muted-soft"
    >
      <span className="font-mono text-xs uppercase tracking-widest">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-5" />
      </motion.div>
    </motion.div>
  );
}
