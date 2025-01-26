"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <AuroraBackground
        className="!fixed !top-0 !left-0 !w-full !h-screen bg-black"
      >
        <div className="container mx-auto px-32 pt-32 pb-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl font-bold text-white mb-8"
              >
                Automated Security Testing for Modern Web Apps
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-gray-400 mb-8"
              >
                Automated OWASP Top 10 vulnerability scanning with integrated OpenVAS & Metasploit in isolated Docker environments.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4"
              >
                <Button size="lg" className="bg-white text-black font-semibold hover:bg-white">
                  <Link href="/dashboard">
                    Start Scanning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 font-semibold bg-black text-white">
                  Documentation
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-12 flex gap-8 text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <DockerLogoIcon className="h-6 w-6" />
                  <span>Docker Containerized</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldIcon className="h-6 w-6" />
                  <span>OWASP Top 10 Coverage</span>
                </div>
              </motion.div>
            </div>

            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="md:w-1/2 w-full bg-white/50 backdrop-blur-sm rounded-lg border p-8 h-96 shadow-lg"
            >
              <div className="w-full h-full border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400">
                Visual Dashboard Preview
              </div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}

// Icons (Place these in components/ui/icons.tsx)
function DockerLogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 8h4v4H4zm0-4h4v4H4zm4 4h4v4H8zm4-4h4v4h-4zm4 0h4v4h-4zm-8 8h4v4H8zm4 0h4v4h-4zm4 0h4v4h-4z"/>
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    </svg>
  );
}