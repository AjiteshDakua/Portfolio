import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://ajiteshdakua.github.io",
    label: "GitHub",
    hoverColor: "hover:text-gray-300",
  },
  {
    icon: Mail,
    href: "mailto:ajiteshdakua@gmail.com",
    label: "Email",
    hoverColor: "hover:text-red-400",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ajitesh Dakua</h3>
          <p className="text-gray-400 mb-6">
            Full Stack Developer passionate about creating innovative solutions
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className={`text-gray-400 ${link.hoverColor} transition-all duration-200 transform hover:scale-110`}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              </Button>
            ))}
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Ajitesh Dakua. Designed & developed with passion. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
