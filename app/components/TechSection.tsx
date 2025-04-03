import React from "react";
import {
  SiReact,
  SiTypescript,
  SiVercel,
  SiJenkins,
  SiCplusplus,
  SiC,
  SiPython,
  SiNodedotjs,
  SiDjango,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiYolo,
  SiR,
  SiScikitlearn,
  SiPostgresql,
  SiSocketdotio,
  SiNginx,
  SiFastapi,
  SiMongodb,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiKubernetes,
  SiSelenium,
  SiPrometheus,
  SiGrafana,
  SiMiro,
  SiAmazonaws,
} from "@icons-pack/react-simple-icons";

import { FaGithub, FaBrain } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { BsNvidia } from "react-icons/bs";
import { FaLocust } from "react-icons/fa6";

const TechSection: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  // const frontEndIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiTypescript />, name: "TypeScript" },
  //   { icon: <SiJavascript />, name: "JavaScript" },
  //   { icon: <SiReact />, name: "React" },
  //   { icon: <SiNextdotjs />, name: "Next.js" },
  //   { icon: <SiVite />, name: "Vite" },
  //   { icon: <SiVercel />, name: "Vercel" },
  //   { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  //   { icon: <SiFigma />, name: "Figma" },
  // ];

  const iconClass = "w-6 h-6"; // Tailwind CSS classes for consistent icon size

  const languagesIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiPython className={iconClass} />, name: "Python" },
    { icon: <SiTypescript className={iconClass} />, name: "TypeScript" },
    { icon: <SiCplusplus className={iconClass} />, name: "C++" },
    { icon: <SiPostgresql className={iconClass} />, name: "SQL" },
    { icon: <SiC className={iconClass} />, name: "C" },
  ];

  const webIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiReact className={iconClass} />, name: "React" },
    { icon: <SiNodedotjs className={iconClass} />, name: "Node.js" },
    { icon: <SiMongodb className={iconClass} />, name: "MongoDB" },
    { icon: <SiFlask className={iconClass} />, name: "Flask" },
    { icon: <SiFastapi className={iconClass} />, name: "FastAPÏ" },
    { icon: <SiDjango className={iconClass} />, name: "Django" },
    { icon: <SiSocketdotio className={iconClass} />, name: "Socket.io" },
    { icon: <SiNginx className={iconClass} />, name: "Nginx" },
    { icon: <SiVercel className={iconClass} />, name: "Vercel" },
    { icon: <SiMiro className={iconClass} />, name: "Miro" },
  ];

  const mlIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiPytorch className={iconClass} />, name: "PyTorch" },
    { icon: <SiTensorflow className={iconClass} />, name: "TensorFlow" },
    { icon: <SiPandas className={iconClass} />, name: "Pandas" },
    { icon: <SiScikitlearn className={iconClass} />, name: "Scikit-Learn" },
    { icon: <SiOpencv className={iconClass} />, name: "OpenCV" },
    { icon: <SiNumpy className={iconClass} />, name: "NumPy" },
    { icon: <SiYolo className={iconClass} />, name: "YOLO" },
    { icon: <SiR className={iconClass} />, name: "R" },
    { icon: <FaBrain className={iconClass} />, name: "vLLM" },
    { icon: <FaLocust className={iconClass} />, name: "Locust" },
  ];

  const toolsIcons: { icon: JSX.Element; name: string }[] = [
    { icon: <SiDocker className={iconClass} />, name: "Docker" },
    { icon: <SiKubernetes className={iconClass} />, name: "Kubernetes" },
    { icon: <SiJenkins className={iconClass} />, name: "Jenkins" },
    { icon: <SiGrafana className={iconClass} />, name: "Grafana" },
    { icon: <SiSelenium className={iconClass} />, name: "Selenium" },
    { icon: <SiPrometheus className={iconClass} />, name: "Prometheus" },
    { icon: <DiGoogleCloudPlatform className={iconClass} />, name: "GCP" },
    { icon: <SiAmazonaws className={iconClass} />, name: "AWS" },
    { icon: <FaGithub className={iconClass} />, name: "Github" },
    { icon: <BsNvidia className={iconClass} />, name: "Nvidia" },
  ];

  // const backEndIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiCplusplus />, name: "C++" },
  //   { icon: <SiC />, name: "C" },
  //   { icon: <SiPython />, name: "Python" },
  //   { icon: <SiDjango />, name: "Django" },
  //   { icon: <SiNodedotjs />, name: "Node.js" },
  // ];
  // const mlOtherIcons: { icon: JSX.Element; name: string }[] = [
  //   { icon: <SiPytorch />, name: "PyTorch" },
  //   { icon: <SiTensorflow />, name: "TensorFlow" },
  //   { icon: <SiOpencv />, name: "OpenCV" },
  //   { icon: <SiYolo />, name: "YOLO" },
  //   { icon: <SiR />, name: "R" },
  //   { icon: <SiScikitlearn />, name: "Scikit-Learn" },
  // ];

  const renderIcons = (icons: { icon: JSX.Element; name: string }[]) => (
    <ul className="mt-6 grid grid-cols-2 gap-6">
      {icons.map(({ icon, name }, index) => (
        <li
          key={index}
          className={`flex translate-y-4 animate-slideDown items-center gap-2 opacity-0`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {icon}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`min-h-[264px] transition-opacity ${activeSection}`}>
      {/* manually set the height to prevent layout shift */}
      {activeSection === "languages" && renderIcons(languagesIcons)}
      {activeSection === "web" && renderIcons(webIcons)}
      {activeSection === "ml" && renderIcons(mlIcons)}
      {activeSection === "tools" && renderIcons(toolsIcons)}
    </div>
  );
};

export default TechSection;
