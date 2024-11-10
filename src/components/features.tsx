'use client';

import { motion } from "framer-motion";
import { Package, GitMerge, Users } from "lucide-react";

const features = [
    {
        name: "Quality Packages",
        description: "Curated collection of high-quality packages and modules.",
        icon: Package,
    },
    {
        name: "Open Source",
        description: "Fully open source with active community contributions.",
        icon: GitMerge,
    },
    {
        name: "Community Driven",
        description: "Built by developers, for developers.",
        icon: Users,
    },
];

export function FeaturesSection() {
    return (
        <section className="py-10 px-4 mb-20" id="packages">
            <div className="container max-w-screen-2xl mx-auto">
                <div className="mx-auto max-w-2xl text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                    >
                        Everything you need to build
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-6 text-base md:text-lg leading-8 text-muted-foreground"
                    >
                        A comprehensive ecosystem of tools and libraries for modern development.
                    </motion.p>
                </div>
                <div className="mx-auto md:w-11/12 mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="mb-6 md:mb-8">
                                    <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold">{feature.name}</h3>
                                <p className="mt-3 text-sm md:text-base text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}