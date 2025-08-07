import { Card, CardContent } from "../components/ui/card";
import { Code, Server, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and dynamic web applications using modern frameworks like React, combined with elegant styling through Tailwind CSS. Focus on performance, accessibility, and user experience.",
    icon: Code,
    features: [
      "React & JavaScript Development",
      "Responsive Design with Tailwind CSS",
      "Performance Optimization",
      "Cross-browser Compatibility",
    ],
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Backend Integration",
    description:
      "Expertise in integrating databases and APIs to create robust backend systems. Specializing in MongoDB, Firebase, and Python-based solutions for scalable applications.",
    icon: Server,
    features: [
      "Database Design & Integration",
      "API Development & Integration",
      "Firebase & MongoDB Solutions",
      "Python Backend Development",
    ],
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services focused on modern
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-background hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`text-2xl ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-muted-foreground"
                      >
                        <Check className="text-green-500 mr-3 w-4 h-4 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
