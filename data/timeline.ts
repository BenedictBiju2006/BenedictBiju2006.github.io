export type TimelineEvent = {
  name: string;
  start: string;
  end?: string;
  description: string;
  projectSlug?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    name: "IGCSE Education",
    start: "2017",
    end: "2021",
    description:
      "During my IGCSE years, I developed a strong academic base in mathematics, science, and computing fundamentals. I became comfortable with structured problem-solving and learned how to break larger tasks into smaller, testable steps. This period also sparked my interest in software development through school projects, where I first experienced how code can automate repetitive work and improve real outcomes.",
  },
  {
    name: "A-Levels Education",
    start: "2021",
    end: "2023",
    description:
      "In A-Levels, I deepened my analytical thinking and strengthened my technical discipline by balancing theoretical subjects with applied coursework. I focused on writing clearer logic, managing deadlines, and communicating ideas effectively in group settings. The experience prepared me for university-level computer science by reinforcing rigorous study habits and a practical mindset for building and evaluating technical solutions.",
  },
  {
    name: "Teaching Assistant",
    start: "2024",
    end: "2024",
    description:
      "As a Teaching Assistant in 2024, I supported students during labs and helped explain programming concepts in approachable ways. I reviewed exercises, clarified debugging strategies, and encouraged structured thinking rather than trial-and-error coding. This role improved my communication skills, patience, and technical confidence, while giving me a better understanding of how to mentor peers and guide learning outcomes.",
  },
  {
    name: "Transcript Automation Project",
    start: "2024",
    description:
      "I built a transcript automation workflow to process PDF reports and generate consistent transcript-ready outputs. The project combined parsing logic, validation checkpoints, and streamlined formatting to reduce manual data entry. It taught me how to design reliable pipelines for structured extraction and highlighted the value of automation in reducing repetitive administrative effort while maintaining quality and accuracy.",
    projectSlug: "transcript-automation",
  },
  {
    name: "Discord Bot Project",
    start: "2023",
    description:
      "I developed a Chess.com-integrated Discord bot to support club operations, including player tracking and data retrieval features. The system used SQL for persistent storage and API integration for up-to-date chess data. Building this project strengthened my backend reasoning, command design, and data modeling skills, while showing how lightweight automation can improve coordination in student-led communities.",
    projectSlug: "chess-discord-bot",
  },
  {
    name: "Megasteel Website",
    start: "2025",
    description:
      "For Megasteel, I created a responsive corporate website using React and TypeScript, then deployed it through Vercel. I focused on clean navigation, readable structure, and consistency across devices so business information could be accessed quickly. This project strengthened my frontend engineering workflow and reinforced the importance of balancing performance, maintainability, and visual polish in real client-facing applications.",
    projectSlug: "megasteel-website",
  },
  {
    name: "Grain App",
    start: "2026",
    description:
      "Grain is an ongoing smart grocery app project that uses behavioral patterns and Firebase-backed services to improve shopping decisions. I am designing user flows around practical day-to-day needs, including planning, reminders, and personalized suggestions. The project is helping me integrate mobile UX thinking with scalable backend patterns, while iterating toward a product that is both useful and technically resilient.",
    projectSlug: "grain-app",
  },
];
