'use client';
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
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { ExternalLink } from 'lucide-react';
import { AnimateIn } from "./components/animations/AnimateIn";
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
import Prisma from "./components/icons/prisma";
import Docker from "./components/icons/Docker";
import K8s from "./components/icons/K8s";
import Firebase from "./components/icons/Firebase";
import Supabase from "./components/icons/Supabase";
import Redis from "./components/icons/Redis";
import Kafka from "./components/icons/Kafka";
import RabbitMQ from "./components/icons/RabbitMQ";
import Ngrok from "./components/icons/Ngrok";

export default function Home() {
  const projects = [
    {
      title: "Raft Consensus Simulator",
      description: "A simulation of the Raft distributed consensus algorithm to manage a replicated log. Implements Leader Election, Log Replication, and Safety mechanisms to ensure consistency across distributed nodes.",
      github: "https://github.com/akshatsrivastava11/raft-consensus-sim",
      link: "https://github.com/akshatsrivastava11/raft-consensus-sim",
      technologies: ["Golang", "net/rpc", "sync", "goroutines", "channels"],
    },
    {
      title: "mintCraft",
      description: "mintCraft is an AI-powered content marketplace — users generate art, music, text, and code through registered AI models, with built-in ownership tracking and monetization for creators.",
      link: "Not Live Yet",
      working_demo: "https://vimeo.com/1108440671?share=copy",
      github: "https://github.com/akshatsrivastava11/mintCraft",
      technologies: ["Solana", "Rust", "Anchor", "Next.js", "TypeScript", "Tailwind CSS", "Express", "tRPC", "Prisma", "PostgreSQL", "IPFS", "codama", "zod"],
    },
    {
      title: "Learn",
      description: "Learn is a platform that allows user to create flashcards and quizzes from the pdf provided by the user. It uses AI to generate questions and answers from the pdf and also allows user to create their own questions and answers.",
      working_demo: "https://vimeo.com/1108447544?share=copy",
      link: "https://learn-akshat.vercel.app/",
      github: "https://github.com/akshatsrivastava11/learn",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "Prisma", "PostgreSQL", "zod", "gemini", "OpenAI", "react-pdf", "react-hot-toast"],
      down: true
    },
    {
      title: "Kademlia DHT",
      description: "An implementation of the Kademlia distributed hash table protocol in Go. Supports peer discovery, key-value lookups, and node routing using XOR-based distance metrics across a fully decentralised P2P network.",
      github: "https://github.com/akshatsrivastava11/kademlia-implementation",
      link: "https://github.com/akshatsrivastava11/kademlia-implementation",
      technologies: ["Golang", "net/rpc", "goroutines", "channels", "XOR routing"],
    }
  ];


  const experience = [
    {
      role: "Backend Developer",
      company: "Credible",
      period: "Oct 2025 — Present",
      type: "Remote · Finance",
      bullets: [
        "Engineered core financial infrastructure using TypeScript and JavaScript, focusing on high-availability services and scalable MongoDB schemas for internal financial data.",
        "Developed a decoupled microservices architecture using RabbitMQ for asynchronous task processing and Redis for low-latency data caching and real-time state management.",
        "Integrated Sentry for proactive error tracking and performance monitoring, significantly reducing MTTR for critical production issues.",
        "Streamlined data ingestion pipelines to handle high-throughput financial transactions while ensuring consistency and fault tolerance.",
      ],
      technologies: ["TypeScript", "JavaScript", "Node.js", "MongoDB", "RabbitMQ", "Redis", "Sentry"],
    }
  ];

  const tools = {
    frontend: [
      {
        Logo: React,
        title: "React"
      },
      {
        Logo: Nextjs,
        title: "Next.js"
      },
      {
        Logo: TailwindCSS,
        title: "Tailwind CSS"
      },
    ],
    Backend: [
      {
        Logo: TRPC,
        title: "tRPC"
      },
      {
        Logo: Appwrite,
        title: "Appwrite"
      },
      {
        Logo: MongoDb,
        title: "MongoDb"
      },
      {
        Logo: Nodejs,
        title: "Node.js"
      },
      {
        Logo: PostgreSQL,
        title: "PostgreSQL"
      },
      {
        Logo: Prisma,
        title: "Prisma"
      },
      {
        Logo: Firebase,
        title: "Firebase"
      },
      {
        Logo: Supabase,
        title: "Supabase"
      },
      {
        Logo: Redis,
        title: "Redis"
      },
      {
        Logo: Kafka,
        title: "Kafka"
      },
      {
        Logo: RabbitMQ,
        title: "RabbitMQ"
      }
    ],
    languages: [
      {
        Logo: TypeScript,
        title: "TypeScript"
      },
      {
        Logo: Rust,
        title: "Rust"
      },
      {
        Logo: Golang,
        title: "Golang"
      }
    ],
    ToolingsAndInfra: [
      {
        Logo: Git,
        title: "Git"
      },
      {
        Logo: Docker,
        title: "Docker"
      },
      {
        Logo: K8s,
        title: "Kubernetes"
      },
      {
        Logo: Ngrok,
        title: "Ngrok"
      }
    ]
  };

  return (
    <div className="bg-[#1c1c21] min-h-[100vh] text-zinc-100">
      <div
        className="fixed inset-0 z-0 h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/bg.png)`,
          backgroundSize: '175% 200%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="text-sm text-zinc-400 ml-[30vw]">
          <a href="./Resume (4).pdf"
            download="AkshatSrivastava.pdf"
          >

            Documented CV

          </a>

        </div>
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <section className="mb-6">
            <AnimateIn variant="fadeUp" delay={0.2}>
              <h1 className="text-2xl font-medium tracking-tight mb-4">Hey! I&apos;m Akshat</h1>
            </AnimateIn>

            {/* Description */}
            <AnimateIn variant="fadeUp" delay={0.4}>
              <div className="mb-8">
                <p className="text-sm text-zinc-400 max-w-xl">
                  Software Engineer from Delhi — building
                  <span className="text-zinc-100 font-medium">  scalable full-stack applications  </span>
                  and shipping fast.{" "}
                </p>
              </div>
            </AnimateIn>

            {/* Socials */}
            <AnimateIn variant="fadeUp" delay={0.6}>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://github.com/akshatsrivastava11"
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
                >
                  <Github />
                </a>
                <a
                  href="https://x.com/akshonite"
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
                >
                  <X />
                </a>
                <a
                  href="http://linkedin.com/in/akshat-srivastava-173527314"
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
                >
                  <LinkedIn />
                </a>
                <a
                  href="mailto:akshatsri1108@gmail.com"
                  className="transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
                >
                  <Email />
                </a>
              </div>
            </AnimateIn>
          </section>
        </AnimateIn>

        {/* Projects */}
        <Tabs defaultValue="projects">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <TabsList className="mb-4 flex gap-3 border-none bg-transparent p-0">
              {[
                { label: "Projects", value: "projects" },
                { label: "Experience", value: "experience" },
                { label: "Tools", value: "tools" },
              ].map(({ label, value }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={cn(
                    "px-5 py-1.5 rounded-sm text-zinc-400 font-light transition-all duration-200 ease-out",
                    "data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 data-[state=active]:font-medium",
                    "hover:bg-zinc-800/40 hover:text-zinc-200"
                  )}
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

          </AnimateIn>

          <TabsContent value="projects">
            <AnimateIn variant='fadeUp' delay={0}>
              <section className="mb-12">
                <div className="space-y-8">
                  <ul className="space-y-8">
                    {projects.map((project, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                          <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                            <div className="flex items-baseline justify-between mb-1">
                              <h3 className="text-md font-medium text-zinc-100">{project.title}</h3>
                              <div className="flex flex-row gap-4">
                                {project.github ? (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-100 transition-colors"
                                    onClick={() => track(`${project.title}_github_clicked`)}
                                  >
                                    GitHub <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : null}
                                {project.down && (
                                  <p
                                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-100 transition-colors"
                                  >Might be down due to API Limitations</p>
                                )}
                                {project.link && project.link !== "Not Live Yet" ? (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-100 transition-colors"
                                    onClick={() => track(`${project.title}_clicked`)}
                                  >
                                    View <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : project.link === "Not Live Yet" ? (
                                  <span className="text-xs text-zinc-600">Not Live Yet</span>
                                ) : null}
                                {project.working_demo && (
                                  <a
                                    href={project.working_demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-100 transition-colors"
                                    onClick={() => track(`${project.title}_demo_clicked`)}
                                  >
                                    Working Demo <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-zinc-400 mb-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.filter(tech => tech.length > 0).map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-500">
                                  {tech}
                                  {techIndex < project.technologies.filter(t => t.length > 0).length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
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
                    {experience.map((job, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} delay={delay} variant="fadeLeft">
                          <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                            {/* Title row */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                              <h3 className="text-md font-medium text-zinc-100">
                                {job.role} at {job.company}
                              </h3>
                              {job.period && (
                                <span className="text-xs text-zinc-600 mt-0.5 sm:mt-0">{job.period}</span>
                              )}
                            </div>
                            {/* Type/location badge */}
                            {job.type && (
                              <p className="text-xs text-zinc-600 mb-3">{job.type}</p>
                            )}
                            {/* Bullets */}
                            <ul className="space-y-1.5 mb-3">
                              {job.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex gap-2 text-sm text-zinc-400">
                                  <span className="text-zinc-600 mt-0.5 shrink-0">–</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-500">
                                  {tech}
                                  {techIndex < job.technologies.length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
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

                <h2 className="text-md font-medium mb-4 text-zinc-100">Frontend</h2>
                <section className="mb-12">
                  <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                    {tools.frontend.map(({ Logo, title }, index) => (
                      <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                        <div className="flex flex-col items-center group">
                          <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                            <Logo className="h-full w-full" />
                          </div>
                          <span className="text-xs text-zinc-400 text-center whitespace-nowrap">{title}</span>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            </div>
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

            <div>
              <AnimateIn delay={0.2} variant="fadeUp">
                <h2 className="text-md font-medium mb-4 text-zinc-100">Backend</h2>
                <section className="mb-12">
                  <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                    {tools.Backend.map(({ Logo, title }, index) => (
                      <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                        <div className="flex flex-col items-center group">
                          <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                            <Logo className="h-full w-full" />
                          </div>
                          <span className="text-xs text-zinc-400 text-center whitespace-nowrap">{title}</span>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            </div>
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

            <div>
              <AnimateIn delay={0.4} variant="fadeUp">
                <h2 className="text-md font-medium mb-4 text-zinc-100">Languages</h2>
                <section className="mb-12">
                  <div className="flex flex-wrap gap-y-6 gap-x-6 justify-start">
                    {tools.languages.map(({ Logo, title }, index) => (
                      <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                        <div className="flex flex-col items-center group">
                          <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                            <Logo className="h-full w-full" />
                          </div>
                          <span className="text-xs text-zinc-400 text-center whitespace-nowrap">{title}</span>
                        </div>
                      </AnimateIn>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            </div>
            <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

            <div>
              <AnimateIn delay={0.6} variant="fadeUp">
                <h2 className="text-md font-medium mb-4 text-zinc-100">Tooling And Infrastructure</h2>
                <section className="mb-12">
                  <div className="flex flex-wrap gap-y-6 gap-x-4 justify-start">
                    {tools.ToolingsAndInfra.map(({ Logo, title }, index) => (
                      <AnimateIn key={index} variant="scale" delay={0.1 + index * 0.03} className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]">
                        <div className="flex flex-col items-center group">
                          <div className="relative h-7 w-7 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                            <Logo />
                          </div>
                          <span className="text-xs text-zinc-400 text-center whitespace-nowrap">{title}</span>
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