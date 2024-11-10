"use client";

import { motion } from "framer-motion";
import { Code, Codepen, GitPullRequest, Terminal, Box, Feather, Settings } from "lucide-react";

const contributions = [
    {
        name: "JavaScript",
        description: "Help build JavaScript modules and tools.",
        icon: Code,
        url: "/contribute/javascript",
    },
    {
        name: "Python",
        description: "Contribute to our Python libraries.",
        icon: Codepen,
        url: "/contribute/python",
    },
    {
        name: "Go",
        description: "Support our Go-based projects.",
        icon: GitPullRequest,
        url: "/contribute/go",
    },
    {
        name: "Java",
        description: "Enhance our Java-based solutions.",
        icon: Box,
        url: "/contribute/java",
    },
    {
        name: "Ruby",
        description: "Contribute to our Ruby on Rails projects.",
        icon: Feather,
        url: "/contribute/ruby",
    },
    {
        name: "Rust",
        description: "Join our efforts in building performant Rust libraries.",
        icon: Settings,
        url: "/contribute/rust",
    },
];

export function ContributeSection() {
    return (
        <section className="py-10 px-4 mb-20 bg-background" id="contribute">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="mx-auto max-w-2xl text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary"
                    >
                        Contribute to Our Open Source Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-6 text-base md:text-lg leading-8 text-muted-foreground"
                    >
                        Choose your preferred language and make a meaningful impact. Join us in creating robust, open-source solutions!
                    </motion.p>
                </div>
                <div className="mx-auto md:w-11/12 mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {contributions.map((contribution, index) => (
                            <motion.div
                                key={contribution.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6 md:mb-8">
                                    <contribution.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-primary">{contribution.name}</h3>
                                <p className="mt-3 text-sm md:text-base text-muted-foreground">
                                    {contribution.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
