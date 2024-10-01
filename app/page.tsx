import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import profile from "./ProfileDB.jpg";
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";
import CompactJobExperienceCard from "./components/CompactJobExperienceCard";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between nav">
        <div>
          <h1 className="font-poppins opacity-75 hover:text-sky-300 transition-all delay-75 font-medium text-xl">
            DINESH BABU
          </h1>
        </div>
        <div className="font-poppins  gap-3 items-end opacity-75 text-lg flex cursor-pointer">
          <a href="/projects">Projects</a>
          <a href="https://drive.google.com/file/d/1oaqENrqKdB07KpNqcjNhQze8_4gXleDv/view?usp=drive_link" target="_blank">Resume</a>
          <a>Contact</a>
        </div>
      </div>
      {/* ---------navbar---------- */}
      <div className="py-28 flex flex-col lg:flex-row lg:text-left text-center items-center gap-8">
        <Image
          className="rounded-full border-2 hover:border-4 hover:border-sky-600 hover:border-y-pink-700 transition-all delay-75 border-pink-700"
          src={profile}
          height={150}
          width={150}
          alt="some"
        />
        <div className="flex flex-col gap-4 lg:items-start items-center">
          <h1 className="text-3xl font-roboto leading-relaxed font-semibold">
            <span>Hey, I&apos;m Dinesh Babu.</span>
            <span className="opacity-65">
              {" "}
              I&apos;m a Full Stack and Blockchain Developer.
            </span>
          </h1>
          <div className="flex gap-4">
            <a className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75">
              <Twitter className="w-5" /> Twitter
            </a>
            <a className="text flex gap-1 hover:text-pink-600 font-poppins font-medium transition-all delay-75">
              <Instagram className="w-5" /> Instagram
            </a>
            <a className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75">
              <Linkedin className="w-5" /> LinkedIn
            </a>
            <a className="text flex gap-1 hover:text-gray-400 font-poppins font-medium transition-all delay-75">
              <Github className="w-5" /> Github
            </a>
          </div>
        </div>
      </div>
      {/*--------------Hero ---------------------- */}
      <div>
        <h1 className="text-2xl font-semibold font-Inconsolata p">
          &gt;_Introduction
        </h1>
        <p className="font-roboto py-4 text-justify text-base opacity-75">
          Versatile full-stack web developer with a strong background in modern
          web technologies, DevOps practices, and blockchain solutions. Adept at
          creating scalable, high-performance applications using React, Node.js,
          and TailwindCSS, while integrating smart contracts and decentralized
          technologies. Skilled in automating deployments, optimizing CI/CD
          pipelines, and building blockchain-based systems for secure,
          tamper-proof solutions. Passionate about delivering efficient,
          innovative digital experiences.
        </p>
      </div>
      {/*------------Intro-------------------------*/}
      <div className="py-6">
        <h1 className="text-2xl font-semibold font-Inconsolata p">
        &gt;_Experience
        </h1>
        <CompactJobExperienceCard
        title="Full Stack Developer Intern"
        company="Sustally Inc."
        startDate="Jul 2023"
        endDate="Mar 2024"
        description="Led the creation of a sophisticated website using React.js, Node.js, and TailwindCSS, showcasing advanced web development skills. Successfully completed projects on time with a strong focus on teamwork and quality. Developed a company's primary website during an internship, demonstrating professional expertise. Proactively integrated tools like a chatbot to enhance functionality and user engagement, emphasizing initiative and impactful development."
        skills={["Next Js", "Node Js", "MongoDB", "Firebase","Express Js","CI/CD"]}
      />
      </div>
      {/*-------------------Exprarice ---------------- */}
      <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold font-Inconsolata ">
        &gt;_Previous Work
        </h1>
        <ProjectCard
        title="TokenForge(Token Creation on Solana Blockchain)"
        startDate="Sep 2024"
        endDate="Present"
        description="Create and manage tokens on the Solana blockchain effortlessly. Generate metadata-rich tokens for seamless integration and enhanced functionality within your applications."
        skills={["Next.js", "Solana", "Tailwind.css"]}
        deployedLink="https://keyforge-seven.vercel.app/"
        codeLink="https://github.com/chdineshbabu/tokenforge"
      />
        <ProjectCard
        title="KeyFordge(Solana HD Wallet)"
        startDate="Sep 2024"
        endDate="Sep 2024"
        description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
        skills={["Next.js", "Solana", "Tailwind.css"]}
        deployedLink="https://keyforge-seven.vercel.app/"
        codeLink="https://github.com/chdineshbabu/keyforge"
      />
      </div>
      {/*---------------------Projects----------------- */}
      <br />
      <br />
      <br />
      <hr className="w-full"/>
      <br />
      <div className="flex justify-between opacity-65">
        <h1>@DINESH BABU</h1>
        <div className="flex gap-4">
            <a className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75">
              <Twitter className="w-5" /></a>
            <a className="text flex gap-1 hover:text-pink-600 font-poppins font-medium transition-all delay-75">
              <Instagram className="w-5" />
            </a>
            <a className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75">
              <Linkedin className="w-5" />
            </a>
            <a className="text flex gap-1 hover:text-gray-400 font-poppins font-medium transition-all delay-75">
              <Github className="w-5" />
            </a>
          </div>
      </div>
      <ThemeSwitcher />
    </div>
  );
}