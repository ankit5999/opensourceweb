'use client';

import { motion } from "framer-motion";
import { Terminal, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { AnimatedGradient } from "@/components/ui/animated-gradient";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden px-4 py-20 md:py-32">
            {/* <AnimatedGradient /> */}
            <div className="container max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 flex justify-center"
                    >
                        <Terminal className="h-16 w-16 text-primary" />
                    </motion.div>
                    <motion.h1
                        style={{ paddingBottom: "0.2em" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 px-4"
                    >
                        Open Source Development Ecosystem
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-6 text-base md:text-lg leading-8 text-muted-foreground px-4"
                    >
                        Discover, contribute, and build with high-quality open source packages
                        that power modern development.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
                    >
                        <a
                            href="/packages"
                            // target="_blank"
                            rel="noreferrer"
                        >
                        <Button className="w-full sm:w-auto gap-2 py-3 px-6 text-lg font-semibold">
                            <Terminal className="h-4 w-4" />
                            Explore Packages
                        </Button>
                        </a>

                        <a
                            href="#contribute"
                            // target="_blank"
                            rel="noreferrer"
                        >
                            <Button className="w-full sm:w-auto gap-2 py-3 px-6 text-lg font-semibold">
                                <GitBranch className="h-4 w-4" />
                                Contribute
                            </Button>
                        </a>
                        
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}