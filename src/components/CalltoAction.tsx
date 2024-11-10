"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function CallToActionSection() {
    return (
        <section className="py-16 px-4 bg-background text-primary">
            <div className="container max-w-screen-xl mx-auto text-center">
                <div className="flex flex-col items-center">
                    {/* Icon Animation */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Terminal className="h-10 w-10 mb-4 text-primary" />
                    </motion.div>

                    {/* Title Animation */}
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 text-primary"
                    >
                        Ready to Contribute?
                    </motion.h2>

                    {/* Description Animation */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                    >
                        Join our community of developers in building high-quality, open-source
                        packages that make a real difference. Let's create something impactful
                        together!
                    </motion.p>

                    {/* Button Animation */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="/contribute"
                            rel="noreferrer"
                        >
                            <Button className="w-full sm:w-auto gap-2 py-3 px-6 text-lg font-semibold">
                                <Terminal className="h-4 w-4" />
                                Get Started
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
