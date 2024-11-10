"use client";

import { motion } from "framer-motion";
import { MailIcon, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { Header } from "./header";

export function ComingSoonSection() {
    return (
        <section className="relative min-h-screen">
            <Header />
            {/* Content Container */}
            <div className="relative flex flex-col items-center justify-center bg-background text-primary font-mono p-6">
                <div className="relative flex flex-col items-center text-center space-y-6">
                    {/* Animated Icon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-2 flex justify-center"
                    >
                        <Terminal className="h-16 w-16 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 px-4 leading-tight"
                        style={{ paddingBottom: "0.2em" }}  // Ensures 'g' descenders don't get clipped
                    >
                        Contribution is Private
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="max-w-lg text-lg text-muted-foreground font-mono"
                    >
                        We’re building something amazing for developers! Stay tuned as we craft tools, resources, and content specifically for the developer community.
                    </motion.p>

                    {/* Notify Me Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a
                            href="/packages"
                            rel="noreferrer"
                        >
                            <Button className="w-full sm:w-auto gap-2 py-3 px-6 text-lg font-semibold">
                                <Terminal className="h-4 w-4" />
                                Explore Packages
                            </Button>
                        </a>
                        <a
                            href="/contact"
                            rel="noreferrer"
                        >
                            <Button className="w-full sm:w-auto gap-2 py-3 px-6 text-lg font-semibold">
                                <MailIcon className="h-4 w-4" />
                                Contact Us
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoonSection;
