export type SiteLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  location?: string;
  start: string;
  end: string;
  highlights?: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  href?: string;
  tech?: string[];
};

export const site = {
  /** Shown in browser tab, SEO, and <title> */
  siteTitle: "Ilana Priev · AIDD",
  name: "Ilana Priev",
  /** Text after “© {year}” in the footer — edit here (no “· AIDD” unless you add it) */
  footerCredit: "Ilana Priev",
  /** Logo URL under `public/` (copy your `app/Logo.png` → `public/logo.png`) */
  logo: {
    src: "/logo.png",
    alt: "Ilana Priev — personal portfolio",
    /** Raster wordmark; height drives layout, width keeps aspect ratio */
    width: 220,
    height: 64,
  },
  role: "System Integration Engineer",
  tagline:
    "Electrical and electronics engineer integrating complex multidisciplinary systems — calibration, validation, root-cause analysis, and measurable reliability.",
  location: "Israel",
  links: {
    email: "mailto:ilana.p283@gmail.com",
    linkedin: "https://www.linkedin.com/in/ilana-priev-amzaleg/",
    /** Israeli mobile — tap-to-call / WhatsApp “click to chat” often starts from phone copy */
    phone: "tel:+972526655621",
  },
  /** Shown as plain text on Contact (same address as mailto) */
  emailAddress: "ilana.p283@gmail.com",
  phoneDisplay: "052-6655621",
  /** Contact page — edit all copy here */
  contactPage: {
    title: "Contact",
    intro:
      "Open to opportunities in system integration, validation, and multidisciplinary engineering. Reach me by email, LinkedIn, or phone.",
    sections: {
      email: {
        title: "Email",
        hint: "Best for CV, materials, and detailed messages.",
        button: "Send email",
      },
      linkedin: {
        title: "LinkedIn",
        hint: "Profile and professional updates.",
        button: "Open LinkedIn",
      },
      phone: {
        title: "Phone",
        hint: "Israel — you can also reach me on WhatsApp at this number.",
        button: "Call",
      },
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies SiteLink[],
  about: [
    "Hands-on experience integrating complex multidisciplinary systems with end-to-end ownership of calibration, testing, and validation.",
    "Strong system-level perspective across electrical, mechanical, and motion subsystems — from schematics and documentation to troubleshooting, root cause analysis, and practical engineering solutions.",
    "Background in manufacturing leadership, safety compliance for medical products, and continuous improvement through automation and structured test planning.",
  ],
  experience: [
    {
      title: "System Integration Engineer",
      company: "Applied Materials",
      location: "Rehovot, Israel",
      start: "2024",
      end: "Present",
      bullets: [
        "End-to-end responsibility for system calibration, testing, and validation on complex multidisciplinary platforms.",
        "Investigation and troubleshooting with root cause analysis; proposing and implementing engineering fixes.",
        "Analyzing electrical schematics and technical documentation to support verification, integration, and problem solving.",
      ],
    },
    {
      title: "Safety Compliance Engineer",
      company: "ITL",
      location: "Modiin, Israel",
      start: "2023",
      end: "2024",
      bullets: [
        "Ensured medical products met international safety standards (EMC, RF, photobiological, laser, ultrasound) and prepared documentation for regulatory approval.",
        "Led engineering projects independently: schematic review, test planning, and hands-on laboratory testing.",
        "Delivered technical assistance and client training aligned with standards and documentation requirements.",
      ],
    },
    {
      title: "Team Leader — SORT Production Line",
      company: "Intel",
      location: "Kiryat Gat, Israel",
      start: "2021",
      end: "2023",
      bullets: [
        "Supervised a team of 13 technicians; sustained production goals with product utilization above 85%.",
        "Designed and ran training programs to grow team capability and consistency.",
        "Collaborated across functions to keep throughput, quality, and communication aligned.",
      ],
    },
    {
      title: "Manufacturing Specialist",
      company: "Intel",
      location: "Kiryat Gat, Israel",
      start: "2019",
      end: "2021",
      bullets: [
        "Selected by the company to pursue a B.Sc. in Electrical and Electronics Engineering.",
        "Identified repetitive process steps and automated them to improve efficiency and quality.",
        "Drove continuous improvement and problem solving initiatives with measurable cost reductions.",
      ],
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      degree: "B.Sc. Electrical and Electronics Engineering",
      school: "Holon Institute of Technology (HIT)",
      location: "Israel",
      start: "2020",
      end: "2024",
      highlights: [
        "Python, Verilog, VHDL, RTL design, FPGA, ASIC, PCB design, machine learning, data structures and algorithms, system architecture, HW/SW integration and debugging.",
      ],
    },
    {
      degree: "Practical Engineering — Electronics and Computers",
      school: "Technological College of the Air Force",
      location: "Beer Sheva, Israel",
      start: "2015",
      end: "2017",
      highlights: [
        "Embedded systems with Arduino, C, MATLAB; OrCAD; hardware protocols (I2C, SPI).",
      ],
    },
  ] satisfies EducationItem[],
  military:
    "2017–2019 — Technician, Israeli Air Force (Light Beam systems & control tower operations).",
  languages: "Hebrew (native), English and Russian (highly proficient).",
  projects: [
    {
      name: "Personal portfolio site",
      description:
        "This site: a concise, fast Next.js portfolio deployed on Vercel — content-driven structure for easy updates.",
      href: undefined,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    },
  ] satisfies ProjectItem[],
};
