import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-16 py-6"
    >
      <div className="flex items-center gap-6 lg:gap-10">
        <h2 className="font-black text-2xl tracking-tighter">ASOC</h2>

        <div className="max-lg:hidden flex items-center gap-8 text-sm font-medium opacity-80">
          <Link to="/about" className="hover:opacity-100 transition-opacity">
            About
          </Link>
          <Link to="/projects" className="hover:opacity-100 transition-opacity">
            Projects
          </Link>
          <Link
            to="/contributors"
            className="hover:opacity-100 transition-opacity"
          >
            Contributors
          </Link>
          <Link
             to="/announcement"
             className="hover:opacity-100 transition-opacity"

            >
             Announcements
          </Link>
          <Link to="/events" className="hover:opacity-100 transition-opacity">
            Events
          </Link>
          <Link
            to="/resources"
            className="hover:opacity-100 transition-opacity"
          >
            Resources
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        <Button
          variant="ghost"
          className="hover:bg-white/10 rounded-full px-6 border border-white"
        >
          Login
        </Button>

        <Button className="buttonGradient rounded-full px-6 font-semibold">
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
}
