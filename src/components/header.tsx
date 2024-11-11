'use client';

import { motion } from "framer-motion";
import { Terminal, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export function Header() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b bg-background/80 dark:border-b-gray-800 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center space-x-2">
                        <Terminal className="h-6 w-6" />
                        <span className="font-bold">Open Source</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-1">
                        {/* GitHub Button */}
                        <a
                            href="/"
                            // target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </a>

                        {/* Contact Button */}
                        <a
                            href="/contact"
                            className="flex items-center gap-2"
                        >
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Contact</span>
                            </Button>
                        </a>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    );
}
