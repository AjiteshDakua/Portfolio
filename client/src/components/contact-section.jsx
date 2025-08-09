import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "ajiteshdakua8@gmail.com",
    href: "mailto:ajiteshdakua@gmail.com",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "954-XXXX-579",
    href: "tel:5719500638",
    bgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com",
    href: "https://www.linkedin.com/in/ajitesh-dakua-aba38a28a",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.io",
    href: "https://github.com/AjiteshDakua",
    bgColor: "bg-gray-100 dark:bg-gray-700",
    iconColor: "text-gray-700 dark:text-gray-300",
  },
];

// Simple validation functions
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = (formData) => {
  const errors = {};

  // Validate Name (Min 2, Max 50 characters)
  if (!formData.name) {
    errors.name = "Name is required.";
  } else if (formData.name.length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  } else if (formData.name.length > 50) {
    errors.name = "Name cannot exceed 50 characters.";
  }

  // Validate Email
  if (!formData.email) {
    errors.email = "Email is required.";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Validate Subject (Min 5, Max 100 characters)
  if (!formData.subject) {
    errors.subject = "Subject is required.";
  } else if (formData.subject.length < 5) {
    errors.subject = "Subject must be at least 5 characters long.";
  } else if (formData.subject.length > 100) {
    errors.subject = "Subject cannot exceed 100 characters.";
  }

  // Validate Message (Min 20, Max 500 characters)
  if (!formData.message) {
    errors.message = "Message is required.";
  } else if (formData.message.length < 20) {
    errors.message = "Message must be at least 20 characters long.";
  } else if (formData.message.length > 500) {
    errors.message = "Message cannot exceed 500 characters.";
  }

  return errors;
};

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const contactMutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataObject = new FormData(event.target);
    formDataObject.append("access_key", "a9bb9cca-fcf4-47b0-bd41-c84ae2929fa9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObject,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting me. I will get back to you soon.",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        event.target.reset(); // optional
      } else {
        toast({
          title: "Failed to Send Message",
          description:
            data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Check your internet connection and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? Let's connect and create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" ref={ref}>
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}
                >
                  <info.icon className={`${info.iconColor} w-5 h-5`} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {info.title}
                  </h4>
                  <a
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        className="mt-2"
                        disabled={contactMutation.isPending}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className="mt-2"
                        disabled={contactMutation.isPending}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      name="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="What's this about?"
                      className="mt-2"
                      disabled={contactMutation.isPending}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell me about your project..."
                      className="mt-2 min-h-[120px] resize-none"
                      disabled={contactMutation.isPending}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold
                     hover:from-teal-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
