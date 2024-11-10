'use client';

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t dark:border-t-gray-800"
        >
            <div className="container max-w-screen-2xl mx-auto px-4 py-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        <span className="font-semibold">Workforwin</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            Built with ❤️ for the developer community
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}