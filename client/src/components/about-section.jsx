// import { Card, CardContent } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { GraduationCap, Briefcase, Settings } from "lucide-react";
// import { useScrollAnimation } from "@/hooks/use-scroll-animation";
// import { motion } from "framer-motion";

// const skills = [
//   "React",
//   "JavaScript",
//   "Python",
//   "Tailwind CSS",
//   "Firebase",
//   "MongoDB",
// ];

// const education = {
//   degree: "B.Tech Computer Science & Engineering",
//   institution: "Brainware University",
//   years: "2023 - 2027",
// };

// const experience = {
//   role: "Intern Developer",
//   company: "Agnirath Aerospace and Defense Research Pvt Limited",
//   duration: "Internship",
// };

// const expertise = ["Web Development", "Backend Integration", "Problem Solving"];

// export default function AboutSection() {
//   const { ref, isVisible } = useScrollAnimation();

//   return (
//     <section id="about" className="py-20 bg-muted/50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A passionate full-stack developer dedicated to solving complex
//             problems through innovative technology solutions.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-semibold mb-6 text-foreground">
//               My Journey
//             </h3>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               My interests are React, Tailwind CSS, and modern web development
//               technologies. My goal is to secure a position in an IT company
//               where I can contribute my skills and grow as a developer. My
//               unique skill is problem-solving - I enjoy breaking down complex
//               challenges into manageable solutions.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               I believe in writing clean, efficient code and staying updated
//               with the latest industry trends. My passion for learning drives me
//               to continuously explore new technologies and improve my craft.
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {skills.map((skill) => (
//                 <Badge
//                   key={skill}
//                   variant="secondary"
//                   className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium"
//                 >
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: 30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {/* Education */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <GraduationCap className="text-2xl text-primary mr-4" />
//                   <h4 className="text-xl font-semibold text-foreground">
//                     Education
//                   </h4>
//                 </div>
//                 <div className="ml-10">
//                   <h5 className="font-medium text-foreground">
//                     {education.degree}
//                   </h5>
//                   <p className="text-muted-foreground">
//                     {education.institution}
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     {education.years}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Work Experience */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <Briefcase className="text-2xl text-primary mr-4" />
//                   <h4 className="text-xl font-semibold text-foreground">
//                     Work Experience
//                   </h4>
//                 </div>
//                 <div className="ml-10">
//                   <h5 className="font-medium text-foreground">
//                     {experience.role}
//                   </h5>
//                   <p className="text-muted-foreground">{experience.company}</p>
//                   <p className="text-sm text-muted-foreground">
//                     {experience.duration}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Expertise */}
//             <Card className="hover:shadow-lg transition-shadow duration-300">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   <Settings className="text-2xl text-primary mr-4" />
//                   <h4 className="text-xl font-semibold text-foreground">
//                     Areas of Expertise
//                   </h4>
//                 </div>
//                 <div className="ml-10 space-y-2">
//                   {expertise.map((area) => (
//                     <p key={area} className="text-muted-foreground">
//                       • {area}
//                     </p>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GraduationCap, Briefcase, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Java",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Clark Auth",
  "Data Structures",
];

const education = {
  degree: "B.Tech Computer Science & Engineering",
  institution: "Brainware University",
  years: "2023 - 2027",
};

const experience = {
  role: "Intern Developer",
  company: "Agnirath Aerospace and Defense Research Pvt Limited",
  duration: "May 2025 - July 2025 (Internship)", // Made duration more specific
};

const expertise = [
  "Full Stack Web Development",
  "Database Management",
  "Problem Solving & Algorithms",
];

// Animation variants for staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background to-muted/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-700">
            About Me
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer passionate about building clean,
            scalable, and user-friendly web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start" // Changed items-center to items-start for better alignment
          ref={ref}
          variants={containerVariants} // Apply container variants
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column: My Journey & Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              My Journey & Skills
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I specialize in{" "}
              <span className="font-semibold text-primary">React</span> and{" "}
              <span className="font-semibold text-primary">Tailwind CSS</span>,
              with a strong focus on backend development. Currently, I'm
              pursuing a B.Tech in Computer Science and Engineering and enjoy
              learning modern technologies to build real-world solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My strength lies in{" "}
              <span className="font-semibold text-primary">
                problem-solving
              </span>
              . I enjoy turning complex challenges into simple, efficient
              solutions. I follow clean code practices and constantly push
              myself to grow as a developer.
            </p>

            <h4 className="text-2xl font-semibold mb-4 text-foreground">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-5 py-2 text-base font-medium rounded-full shadow-md
                             hover:scale-105 hover:shadow-lg transition-all duration-300 transform-gpu cursor-pointer" // Enhanced badge styles
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education, Experience, Expertise Cards */}
          <div className="space-y-8">
            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border border-border/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="text-3xl text-primary mr-4 flex-shrink-0" />
                    <h4 className="text-2xl font-semibold text-foreground">
                      Education
                    </h4>
                  </div>
                  <div className="ml-12 border-l-2 border-primary/50 pl-4">
                    {" "}
                    {/* Indent and vertical line */}
                    <h5 className="font-bold text-xl text-foreground mb-1">
                      {education.degree}
                    </h5>
                    <p className="text-muted-foreground text-lg">
                      {education.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {education.years}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Work Experience Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border border-border/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Briefcase className="text-3xl text-primary mr-4 flex-shrink-0" />
                    <h4 className="text-2xl font-semibold text-foreground">
                      Work Experience
                    </h4>
                  </div>
                  <div className="ml-12 border-l-2 border-primary/50 pl-4">
                    <h5 className="font-bold text-xl text-foreground mb-1">
                      {experience.role}
                    </h5>
                    <p className="text-muted-foreground text-lg">
                      {experience.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {experience.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Expertise Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-card border border-border/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="text-3xl text-primary mr-4 flex-shrink-0" />
                    <h4 className="text-2xl font-semibold text-foreground">
                      Areas of Expertise
                    </h4>
                  </div>
                  <div className="ml-12 space-y-3 border-l-2 border-primary/50 pl-4">
                    {expertise.map((area, index) => (
                      <p
                        key={area}
                        className="text-muted-foreground text-lg flex items-center"
                      >
                        <span className="text-primary mr-2">•</span> {area}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
