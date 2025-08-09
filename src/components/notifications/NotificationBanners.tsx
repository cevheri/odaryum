"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MESSAGES = [
  "Looks like you’re distracted",
  "Climb out of the rabbit hole",
  "Careful, your time is slipping away",
];

export function NotificationBanners() {
  const [message, setMessage] = React.useState<string>("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const next = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(next);
      const timeout = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timeout);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="pointer-events-auto rounded-full bg-neutral-900 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-neutral-900"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


