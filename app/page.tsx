"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center max-w-3xl px-6">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Profile photo"
            className="mx-auto rounded-full border-4 border-white w-36 h-36 object-cover shadow-lg"
          />
          <h1 className="mt-6 text-5xl font-extrabold drop-shadow-lg">
            Sahil Srivastava
          </h1>
          <p className="mt-2 text-lg font-light drop-shadow-md">
            Automation Testing Specialist - Python & Selenium
          </p>
          <Button
            variant="outline"
            as="a"
            href="mailto:sahil@example.com"
            className="mt-6 px-8"
          >
            Contact Me
          </Button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto p-6 mt-16"
      >
        <Card className="bg-gray-900/70 backdrop-blur-sm">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="leading-relaxed text-gray-300">
              I’m Sahil, passionate about building reliable and scalable automation
              test suites using Python and Selenium. I love turning complex manual
              testing tasks into efficient automated workflows.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl mx-auto p-6 mt-10"
      >
        <Card className="bg-gray-900/70 backdrop-blur-sm">
          <CardContent>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <a
                  href="https://github.com/yourusername/selenium-project-1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Selenium Automation: E-commerce Website Testing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername/selenium-project-2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Selenium Automation: Form Validation Suite
                </a>
              </li>
            </ul>

            {/* Animated GIF section */}
            <div className="mt-8 flex justify-center">
              <img
                src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
                alt="Coding animation"
                className="w-48 rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto p-6 mt-10 mb-20"
      >
        <Card className="bg-gray-900/70 backdrop-blur-sm">
          <CardContent>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <div className="flex justify-center gap-8">
              <Button
                variant="outline"
                as="a"
                href="mailto:sahil@example.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Email</span>
              </Button>

              <Button
                variant="outline"
                as="a"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </Button>

              <Button
                variant="outline"
                as="a"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
