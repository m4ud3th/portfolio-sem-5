"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Database } from '@/lib/types/database.types';

type Project = Database['public']['Tables']['projects']['Row'];

interface DynamicHomePageProps {
  projects: Project[];
}

export default function DynamicHomePage({ projects }: DynamicHomePageProps) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#work") {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Fallback static project if no dynamic projects
  const staticProject = {
    id: 'static-2b-green',
    title: '2B Green',
    description: 'A web project I built as part of my first internship. I learned a lot about React, teamwork, and building real-world features.',
    image_url: '/images/2b-green.png',
    project_url: '#',
    github_url: null,
    technologies: ['React', 'TypeScript', 'Tailwind'],
    featured: true,
    created_at: '',
    updated_at: '',
    user_id: ''
  };

  const displayProjects = projects.length > 0 ? projects : [staticProject];

  return (
    <div className="min-h-screen font-sans flex flex-col bg-black relative overflow-x-hidden scroll-smooth">
      {/* Grungy Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-10 mix-blend-overlay" style={{backgroundImage: 'url(https://www.transparenttextures.com/patterns/diamond-upholstery.png), url(https://www.transparenttextures.com/patterns/grunge-wall.png)'}} />
      
      {/* Bold Band-style Header */}
      <header className="w-full bg-black/90 flex items-center justify-between px-8 py-6 border-b-2 border-[#232842] z-20 relative shadow-xl uppercase tracking-widest">
        <div className="flex items-center">
          <HomeNavButton />
        </div>
        <nav className="flex items-center gap-6">
          <WorkScrollButton />
          <a
            href="#contact"
            className="text-white bg-transparent rounded px-5 py-2 font-bold text-lg hover:text-[#6a5cff] hover:bg-[#232842]/30 transition-colors duration-200 shadow-sm tracking-wide cursor-pointer"
          >
            Contact
          </a>
          <a
            href="/auth/login"
            className="text-white bg-transparent rounded px-5 py-2 font-bold text-lg hover:text-[#6a5cff] hover:bg-[#232842]/30 transition-colors duration-200 shadow-sm tracking-wide cursor-pointer"
          >
            Admin
          </a>
        </nav>
      </header>

      {/* Hero Section - Big, Centered, Band-like */}
      <section className="flex flex-col items-center justify-center text-center w-full pt-24 pb-20 relative z-10 border-b-2 border-[#232842]/40 bg-gradient-to-b from-black/90 via-[#181b23]/80 to-transparent">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-widest drop-shadow-xl uppercase" style={{ fontFamily: 'var(--font-geist-sans)' }}>
          Maud Kusters
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-semibold tracking-wider uppercase">Creative Coding Student</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Hi! I&apos;m Maud, a college student passionate about web development and digital design. Here you&apos;ll find a selection of my projects. I&apos;m always learning and excited to take on new challenges.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 rounded border-2 border-[#6a5cff] text-white font-bold bg-[#232842]/40 hover:bg-[#6a5cff]/50 hover:text-white transition-all text-lg shadow-lg tracking-wide uppercase cursor-pointer"
        >
          Get in touch
        </a>
      </section>

      {/* Projects Section - Merch Grid Inspired */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        <section id="work" className="relative z-10">
          <h3 className="text-3xl font-black mb-10 text-white text-center tracking-widest uppercase border-b-2 border-[#232842]/40 pb-4">Featured Projects</h3>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {displayProjects.map((project) => (
              <div key={project.id} className="rounded-2xl overflow-hidden shadow-xl border border-[#232842]/30 bg-[#181b23] flex flex-col transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl group">
                {/* Card Header with Icon */}
                <div className="flex items-center gap-2 px-5 pt-5 pb-2 w-full">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#232842]/40 text-[#6a5cff] text-lg font-bold shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75v16.5m-9-16.5v16.5M3.75 7.5h16.5m-16.5 9h16.5" />
                    </svg>
                  </span>
                  <h4 className="font-semibold text-lg text-white tracking-wide">{project.title}</h4>
                </div>
                <div className="w-full aspect-[4/3] bg-[#232842]/20 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image_url || '/images/2b-green.png'} 
                    alt={`${project.title} preview`} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="flex-1 flex flex-col items-start px-5 py-4 w-full">
                  <div className="border-b border-[#232842]/30 w-full mb-3" />
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  
                  {/* Technologies */}
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-[#232842]/40 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 w-full">
                    {project.project_url && project.project_url !== '#' && (
                      <a
                        href={project.project_url}
                        className="flex-1 text-center border border-[#6a5cff] text-white font-medium rounded px-3 py-2 bg-[#232842]/30 hover:bg-[#6a5cff]/67 hover:text-white transition-all text-sm shadow-sm tracking-wide cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        className="flex-1 text-center border border-gray-500 text-gray-300 font-medium rounded px-3 py-2 bg-[#232842]/30 hover:bg-gray-600 hover:text-white transition-all text-sm shadow-sm tracking-wide cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {(!project.project_url || project.project_url === '#') && !project.github_url && (
                      <div className="flex-1 text-center border border-[#6a5cff] text-white font-medium rounded px-3 py-2 bg-[#232842]/30 text-sm shadow-sm tracking-wide opacity-50 cursor-not-allowed">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-20 text-center">
          <h3 className="text-3xl font-black mb-6 text-white tracking-widest uppercase">Contact</h3>
          <p className="text-gray-300 mb-6 text-lg">Want to connect or collaborate? Send me an email!</p>
          <a
            href="mailto:maudeth4@gmail.com"
            className="inline-block px-8 py-3 rounded border-2 border-[#6a5cff] text-white font-bold bg-[#232842]/40 hover:bg-[#6a5cff]/67 hover:text-white transition-all text-lg shadow-lg tracking-wide uppercase cursor-pointer"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-black/90 text-center text-gray-400 text-base border-t-2 border-[#232842]/40 mt-16 relative z-10 rounded-t-xl shadow-lg backdrop-blur-md tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Maud Kusters. All rights reserved.
      </footer>
    </div>
  );
}

function HomeNavButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/")}
      className="text-3xl md:text-4xl font-black text-white select-none tracking-widest drop-shadow-lg hover:text-[#6a5cff] transition-colors duration-200 cursor-pointer"
      style={{ fontFamily: 'var(--font-geist-sans)' }}
      type="button"
      aria-label="Go to home page"
    >
      M Kusters
    </button>
  );
}

function WorkScrollButton() {
  const router = useRouter();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (window.location.pathname === "/") {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#work");
    }
  }
  return (
    <button
      onClick={handleClick}
      className="text-white bg-transparent rounded px-5 py-2 font-bold text-lg hover:text-[#6a5cff] hover:bg-[#232842]/30 transition-colors duration-200 shadow-sm tracking-wide cursor-pointer"
      type="button"
    >
      Work
    </button>
  );
}