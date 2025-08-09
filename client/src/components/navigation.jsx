import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, Menu } from "lucide-react";
import { motion } from "framer-motion"; // Import motion for animations

const navigationItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSectionId = "home";
      for (const item of navigationItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for better active section detection, considering navbar height
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSectionId = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-md" // Enhanced scrolled state
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a // Apply motion for a subtle logo animation
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 tracking-tight transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            &lt;/AD&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? "text-primary bg-primary/10" // More prominent active state
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                {item.label}
                {/* Animated underline for active/hover state */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400" // Gradient underline
                  initial={{ width: 0, x: "50%" }}
                  animate={{
                    width:
                      activeSection === item.href.substring(1) ? "100%" : "0%",
                    x: activeSection === item.href.substring(1) ? "0%" : "50%",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  // Hover effect using group-hover
                  onHoverStart={(e) => {
                    if (activeSection !== item.href.substring(1)) {
                      e.currentTarget.style.width = "100%";
                      e.currentTarget.style.transform = "translateX(0%)";
                    }
                  }}
                  onHoverEnd={(e) => {
                    if (activeSection !== item.href.substring(1)) {
                      e.currentTarget.style.width = "0%";
                      e.currentTarget.style.transform = "translateX(50%)";
                    }
                  }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/50 dark:hover:bg-accent/50 transition-colors duration-200
             border border-gray-300 dark:border-gray-700 " // Added border styles
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-accent/50 dark:hover:bg-accent/50 transition-colors duration-200"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-lg" // Blurry background for sheet
                >
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-border/60">
                      <h2 className="font-bold text-2xl text-primary tracking-wide">
                        Navigation
                      </h2>
                    </div>
                    <nav className="flex-1 py-6 space-y-2">
                      {navigationItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`block w-full text-left px-5 py-3 text-lg font-medium rounded-xl transition-colors duration-200 ${
                            activeSection === item.href.substring(1)
                              ? "bg-primary text-primary-foreground shadow-lg" // Solid background for active in mobile
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
