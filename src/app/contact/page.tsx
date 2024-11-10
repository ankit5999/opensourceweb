"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Header } from "@/components/header";

export default function Contact() {
  return (
    <section className="relative min-h-screen">
      <Header />
      <div className="relative flex flex-col items-center justify-center bg-background text-primary font-mono p-6">
        <div className="max-w-2xl text-center space-y-6">
          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <Terminal className="h-12 w-12 text-primary" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            Get in Touch
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground"
          >
            We're here to connect with fellow developers and answer any questions. Reach out and stay in touch!
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg text-muted-foreground">
              <strong>Email:</strong> contact@workforwin.com
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              <strong>Website:</strong> https://www.workforwin.com
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              1st Floor, Vipul Business Park, Central Park II Rd, Sector 48, Gurugram, Haryana 122022
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
