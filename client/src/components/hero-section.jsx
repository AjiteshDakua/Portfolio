import { Button } from "@/components/ui/button";
import { Code, Sparkles, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            ref={ref}
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Ajitesh Dakua
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 mb-8 leading-relaxed font-semibold">
              Full Stack Developer | Problem Solver | React & Tailwind CSS
              Enthusiast
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
              I am passionate about building creative and efficient web
              solutions using modern technologies. Currently, I am pursuing a
              B.Tech in Computer Science and Engineering at Brainware
              University, with a strong focus on React and full-stack
              development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/MY_Resume.pdf"
                download="Ajitesh_Dakua_Resume.pdf"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 font-semibold rounded-xl shadow-md transition-all duration-300 hover:from-teal-400 hover:to-blue-500 hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                My Resume
                <Download className="w-5 h-5" />
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavClick("#contact")}
                className="relative px-8 py-3 font-semibold rounded-xl border-2 border-blue-500 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 p-2">
                  <img
                    src={assets.hero_profile}
                    alt="Ajitesh Dakua - Professional Profile Picture"
                    className="w-full h-full rounded-full object-cover "
                  />
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code className="text-2xl text-gray-800" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="text-xl text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
