'use client';
import Image from "next/image";
import Github from "./components/icons/Github";
import X from "./components/icons/x";
import LinkedIn from "./components/icons/LinkedIn";
import Email from "./components/icons/Email";
import {
Tabs,
TabsList,
TabsTrigger,
TabsContent
} from "@/components/ui/tabs";
// import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { ExternalLink } from 'lucide-react';
import { AnimateIn } from "./components/animations/AnimateIn";
import Trpc from "./components/icons/trpc";
import React from "./components/icons/ReactIcon";
import Nextjs from "./components/icons/Next";
import TailwindCSS from "./components/icons/Tailwind";
import TypeScript from "./components/icons/Typescript";
import TRPC from "./components/icons/trpc";
import Appwrite from "./components/icons/appwrite";
import MongoDb from "./components/icons/mongo";
import Nodejs from "./components/icons/Nodejs";
import PostgreSQL from "./components/icons/postgres";
import Git from "./components/icons/Git";
import Rust from "./components/icons/Rust";
import Golang from "./components/icons/Golang";
import Solana from "./components/icons/solana";
export default function Home() {
const projects = [
{
  title: "mintCraft",
  description: "mintCraft is a decentralized marketplace where AI generates content (art, music, text, code) that's instantly minted as NFTs on Solana, with built-in ownership tracking and monetization. Users can also register their own AI models and earn from usage fees.",
  link: "Not Live Yet",
  github: "https://github.com/akshatsrivastava11/mintCraft",
  technologies: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript", "Tailwind CSS", "Express", "trpc", "Prisma", "PostgreSQL", "IPFS", "codama", "zod", ""],
},
{
  title: "Learn",
  description: "Learn is a platform that allows user to create flashcards and quizzes from the pdf provided by the user. It uses AI to generate questions and answers from the pdf and also allows user to create their own questions and answers.",
  link: "https://learn-akshat.vercel.app/",
  github: "https://github.com/akshatsrivastava11/learn",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Prisma", "PostgreSQL", "zod", "gemini", "OpenAI", "react-pdf", "react-hot-toast"],
},
{
  title: "Histograph",
  description: "Histograph is a terminal-based tool that fetches the browser's history and builds a graph of the user's browsing history. It allows users to visualize their browsing patterns and discover new connections between websites.",
  link: "github.com/akshatsrivastava11/Histograph",
  github: "https://github.com/akshatsrivastava11/Histograph",
  technologies: ["Golang", "bubbles", "bubbletea", "sqlite3"]

},
{
  title: "2d-metaverse api",
  description: "a 2d-metaverse api completely written in golang along with the test written in js",
  github: "https://github.com/akshatsrivastava11/2d-metaverse",
  link: "https://github.com/akshatsrivastava11/2d-metaverse",
  technologies: ["gorilla/mux", "prisma-client-go", "prisma", "postgres", "jest"]
}
]
const experience=[
{
  role:"Builder",
  company:"Turbin3",
  description:"Intensive Solana blockchain development program focusing on Rust and TypeScript. Building full-stack decentralized applications, smart contract development, and Web3 integrations on Solana's high-performance blockchain.",
  technologies:["Solana", "Rust", "anchor","IPFS","codama","@solana/web3.js","gill","umi","metaplex"],
}
]
const tools={
frontend:[
  {
    Logo: React,
    title:"React"
  },
  {
    Logo: Nextjs,
    title:"Next.js"
  },
  {
    Logo: TailwindCSS,
    title:"Tailwind CSS"
  },
  {
    Logo: TypeScript,
    title:"TypeScript"
  },
  
],
Backend:[
    {
      Logo: TRPC,
      title:"tRPC"
    },
    {
      Logo: Appwrite,
      title:"Appwrite"
    },
    {
      Logo: MongoDb,
      title:"MongoDb"
    },
    {
      Logo: Nodejs,
      title:"Node.js"
    },
    {
      Logo: PostgreSQL,
      title:"PostgreSQL"
    }
],
languages:[
  {
    Logo: TypeScript,
    title:"TypeScript"
  },
  {
    Logo: Rust,
    title:"Rust"
  },
  {
    Logo: Golang,
    title:"Golang"
  }
],
ToolingsAndInfra:[
  {
    Logo: Git,
    title:"Git"
  },
  {
    Logo: Solana,
    title:"Solana"
  }
]
}
return (
<div className="bg-[#1c1c21] min-h-[100vh] text-[#65747b] ">
  <div className="max-w-[50%] mx-auto p-13 flex flex-col gap-6">
    {/* Header */}
    <div className="">
      <h1 className="text-2xl">Hey! I'm Akshat</h1>
    </div>
    {/* Description */}
    <div>
      <div>Software Engineer from Delhi,Contact me below.Currently building mintCraft</div>
    </div>
    {/* Socials */}
    <div className="flex gap-4">
      <a href="https://github.com/akshatsrivastava11">
        <Github />
      </a>
      <a href="https://github.com/akshatsrivastava11">
        <X />
      </a>
      <a href="https://github.com/akshatsrivastava11">
        <LinkedIn />
      </a>
      <a href="https://github.com/akshatsrivastava11">
        <Email />
      </a>
    </div>
    {/* Projects */}
    <Tabs defaultValue="projects">
      <AnimateIn variant="fadeUp" delay={0.5} >
      <TabsList className="mb-4 border-none bg-transparent flex gap-6 mt-3">
        <TabsTrigger value="projects"
          className="text-[#7a7a7a]"
        >
          Projects
        </TabsTrigger>
        <TabsTrigger value="experience"
          className="text-[#7a7a7a]">
          Experience
        </TabsTrigger>
        <TabsTrigger value="tools"
          className="text-[#7a7a7a]">
          Tools
        </TabsTrigger>
      </TabsList>
      </AnimateIn>
      <TabsContent value="projects">
        <AnimateIn variant='fadeUp' delay={0.2}>
     <section className="mb-12">
            <div className="space-y-8">
              <ul className="space-y-8">
                {projects.map((project, index) => {
                  const delay = 0.1 + index * 0.1;
                  return (
                    <AnimateIn key={index} variant="fadeUp" delay={delay}>
                      <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                        <div className="flex items-baseline justify-between mb-1">
                          <h3 className="text-md font-medium">{project.title}</h3>
                          <div className="flex flex-row gap-2">
                            {project.github ? (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                onClick={() => track(`${project.title}_github_clicked`)}
                              >
                                GitHub <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : null}
                            {project.link ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                onClick={() => track(`${project.title}_clicked`)}
                              >
                                View <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : null}
                          </div>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                              {tech}
                              {techIndex < project.technologies.length - 1 ? " /" : ""}
                            </span>
                          ))}
                        </div>
                      </li>
                    </AnimateIn>
                  );
                })}
              </ul>
            </div>
          </section>
    </AnimateIn>
      </TabsContent>
      <TabsContent value="experience">
        <AnimateIn delay={0} variant="fadeUp">
          <section className="mb-12">
            <div className="space-y-8">
              <ul className="space-y-8">
                {experience.map((job:any, index) => {
                  const delay = 0.1 + index * 0.1;
                  return (
                    <AnimateIn key={index} delay={delay} variant="fadeUp">
                      <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                          <h3 className="text-md font-medium">
                            {job.role} {job.role.toLowerCase().includes("freelance") ? "" : "at"} {job.company}
                          </h3>
                          <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech:any, techIndex:number) => (
                            <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                              {tech}
                              {techIndex < job.technologies.length - 1 ? " /" : ""}
                            </span>
                          ))}
                        </div>
                      </li>
                    </AnimateIn>
                  );
                })}
              </ul>
            </div>
          </section>
        </AnimateIn>
      </TabsContent>
      <TabsContent value="tools">
        <div>
        <AnimateIn delay={0} variant="fadeUp">
              <h2 className="text-md font-medium mb-4">Frontend</h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                  {tools.frontend.map(({ Logo, title }, index) => (
                    <AnimateIn key={index}  variant="fadeUp" >
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
        </AnimateIn>
</div>
            <div>
            <AnimateIn  delay={0.4} variant="fadeUp">
              <h2 className="text-md font-medium mb-4">Backend </h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                  {tools.Backend.map(({ Logo, title }, index) => (
                    <AnimateIn key={index}  delay={0.3} variant="fadeUp">
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn>
            </div>
            <div>
                    <AnimateIn  delay={0} variant="fadeUp">
              <h2 className="text-md font-medium mb-4">Languages </h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-6 justify-start">
                  {tools.languages.map(({ Logo, title }, index) => (
                    <AnimateIn key={index}  delay={0.1 + index * 0.03} variant="fadeUp">
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn>

            </div>
            <div>
            <AnimateIn  delay={0} variant="fadeUp">
              <h2 className="text-md font-medium mb-4">Tooling And infra</h2>
              <section className="mb-12">
                <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                  {tools.ToolingsAndInfra.map(({ Logo, title }, index) => (
                    <AnimateIn key={index}  delay={0.1 + index * 0.03} variant="fadeUp">
                      <div className="flex flex-col items-center group">
                        <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                          <Logo  />
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                      </div>
                    </AnimateIn>
                  ))}
                  </div>
                  </section>
            </AnimateIn>
            </div>
        </TabsContent>
    </Tabs>
  </div>
</div>
);
}
