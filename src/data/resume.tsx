import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zeeshan Yaqoob",
  initials: "ZY",
  url: "https://linkedin.com/in/zeeshanyaqoob",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/Karachi,+Pakistan",
  description:
    "Systems Engineer focused on Automation, Control Systems, and Industrial Communication Protocols.",
  summary:
    "I'm Zeeshan Yaqoob, an Electronics Engineer currently working as a Systems Engineer at The Automators Pvt Ltd. I specialize in industrial automation, with practical experience in Siemens PLCs (S7-1200/1500) and Honeywell DCS (C200E) systems, focusing on integrating field data into centralized control environments. [I graduated in Electrical Engineering (Electronics) from Sukkur IBA University](#education), where I was awarded the fully funded OGDCL-NTHP scholarship. My passion lies at the intersection of embedded systems, automation, and artificial intelligence. I led the development of an AI-based fabric defect detection system using YOLOv8, which secured NGIRI funding and won 1st place at SIBA Fest. I continuously strive to create smart, reliable, and efficient solutions that bridge the gap between control systems and intelligent technologies.",
  avatarUrl: "/Zeeshan.png",
  skills: [
    "Siemens PLC (S7-1200/1500)",
    "Honeywell DCS (C300/C200E)",
    "TIA Portal",
    "WinCC",
    "Modbus RTU/TCP",
    "RS-485",
    "Industrial Commissioning",
    "Control Logic Design",
    "Arduino",
    "UART",
    "Verilog",
    "Python",
    "C",
    "C++",
    "Flask",
    "Streamlit",
    "YOLOv8",
    "OpenCV",
    "Eagle (PCB Design)",
    "VMware",
    "Git",
    "Microsoft Excel",
    "Power BI",
    "Troubleshooting",
    "Technical Documentation",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "zeeshanyaqoob999@gmail.com",
    tel: "+923156949336",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Zeeshanx186",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zeeshanyaqoob",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Zishan_69",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/zeeshan-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "The Automators PVT Ltd",
      href: "https://automators.com.pk/",
      location: "Remote/Local",
      title: "Systems Engineer",
      logoUrl: "/Automators.png",
      start: "July 2024",
      end: "Present",
      badges: ["Honeywell DCS", "Siemens PLC", "Industrial Automation"],
      description:
        "As a Systems Engineer at The Automators Pvt Ltd since July 2024, I have been actively involved in industrial automation projects, focusing on the programming and commissioning of Siemens PLCs (S7-1200/1500) and the integration of field devices with Honeywell Experion DCS (C200E). My responsibilities include developing control logic and HMI interfaces using TIA Portal and WinCC, configuring communication protocols such as Modbus RTU over RS-485, and integrating third-party controllers like ComAp and Woodward using Moxa gateways. I work on-site to troubleshoot and ensure seamless data acquisition and control system performance. Additionally, I collaborate with clients and engineers to deliver tailored automation solutions that enhance process efficiency and system reliability.",
    },
    {
      company: "Atlas Power",
      href: "https://www.apl.atlas.pk/",
      location: "Remote",
      title: "Intern",
      logoUrl: "/atlas.jpeg",
      start: "July 2023",
      end: "August 2023",
      badges: ["Power Factor Optimization", "Energy Systems", "Electrical Analysis"],
      description:
        "During my internship at Atlas Power Plant in Sheikhupura, I gained hands-on experience in the operations and maintenance of a large-scale power generation facility. I closely observed the functioning of gas turbines, generators, and auxiliary systems, developing a solid understanding of power production and energy management. I was assigned a project to analyze the power factor of all motors across the plant and propose solutions for optimization. Through this, I learned how to identify inefficiencies, suggest corrective actions, and understand the importance of electrical load balancing and reactive power management in industrial power systems. This experience strengthened my foundation in power engineering and exposed me to real-world industrial practices.",
    },
  ],
  education: [
    {
      school: "Sukkur IBA University",
      href: "https://www.iba-suk.edu.pk/",
      degree: "Bachelors of Engineering (Electronics)",
      logoUrl: "/IBA.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Deep Bed Filters Automation",
      company: "UNICOL Sugar Mill",
      href: "",
      dates: "Sep 2024 – March 2025",
      active: true,
      description:
        "Engineered the complete automation of Deep Bed Filters using Honeywell Experion PKS C200E DCS at UNICOL Sugar Mill. Developed control logic for intelligent sequencing and load balancing, designed custom HMI, and executed on-site commissioning.",
      technologies: [
        "Honeywell C200E",
        "HMI Builder",
        "Control Builder",
        "Process Instrumentation",
        "Industrial Networking"
      ],
      links: [],
      image: "/dbf1.png",
      video: ""
    },
    {
      title: "Shower Control System Automation",
      company: "PACKAGES Limited",
      href: "",
      dates: "August 2024 – Sep 2024",
      active: true,
      description:
        "Designed and implemented an automated shower control system at PACKAGES Limited using Honeywell C300 DCS. The solution improved water efficiency by optimizing PID control, sequencing, and HMI-based operations.",
      technologies: [
        "Honeywell C200E",
        "Station Designer",
        "Control Builder",
        "PID Tuning",
        "Process Instrumentation"
      ],
      links: [],
      image: "https://github.com/Zeeshanx186/Zeeshan-Portfolio/blob/b9d680a96e7ccab523119b77a61b37987b5005f8/shower.png",
      video: ""
    },
    {
      title: "Refine Centrifugal Machine Commissioning",
      company: "UNICOL Sugar Mill",
      href: "",
      dates: "Sep 2024 – Present",
      active: true,
      description:
        "Led the commissioning of a Refine Centrifugal Machine using Siemens S7-1200 PLC and SINAMICS V20 drives at UNICOL Sugar Mill. Designed control logic, HMI interface, and integrated safety interlocks for reliable crystallization process automation.",
      technologies: [
        "Siemens S7-1200",
        "TIA Portal",
        "Siemens HMI",
        "SINAMICS V20",
        "PROFINET"
      ],
      links: [],
      image: "/rs.png",
      video: ""
    },
    {
      title: "Automated Vision System for Fabric Defect Detection",
      company: "Sukkur IBA University",
      href: "https://github.com/Zeeshanx186/Automated-Vision-System-for-Fabric-Defect-Inspection-.git",
      dates: "Feb 2024 – Jul 2024",
      active: true,
      description:
        "Developed a YOLOv8-based machine vision system for real-time textile defect detection, integrated with a Flask web app. The project was funded by NGIRI and showcased at university exhibitions.",
      technologies: [
        "YOLOv8",
        "Flask",
        "Python",
        "OpenCV",
        "HTML/CSS",
        "LabelImg"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Zeeshanx186/Automated-Vision-System-for-Fabric-Defect-Inspection-.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yolo.png",
      video: ""
    },
    {
      title: "GSM-Based GPS Vehicle Tracking System",
      company: "Personal Project",
      href: "https://github.com/Zeeshanx186/GPS-GSM-Based-Vehicle-Tracking-System",
      dates: "Jul 2023 – Sep 2023",
      active: true,
      description:
        "Designed a microcontroller-based real-time GPS tracking system using SIM900 and Neo-6M modules. Sent location data over GSM via SMS with Google Maps links.",
      technologies: [
        "Arduino",
        "SIM900",
        "Neo-6M GPS",
        "AT Commands",
        "Eagle CAD"
      ],
      links: [],
      image: "/gps.jpg",
      video: ""
    },
  ],
};
