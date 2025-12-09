"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Cloud,
  ClipboardIcon,
  Code2,
  Database,
  Download,
  LineChart,
  MonitorSmartphone,
  Server,
  Terminal,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const documents = {
  resume: {
    label: "Resume (English)",
    file: "resume-en.pdf",
    accent: "from-cyan-500/40 to-slate-900",
  },
  cv: {
    label: "CV (Español)",
    file: "cv-es.pdf",
    accent: "from-emerald-500/35 to-slate-900",
  },
} as const;

type DocKey = keyof typeof documents;

type Tool = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

const toolchain: Tool[] = [
  {
    label: "CI/CD Automation",
    detail: "GitLab CI/CD pipelines, Jenkins stages, SonarQube gating",
    icon: Code2,
  },
  {
    label: "Containers & Platforms",
    detail: "Docker + Compose, Portainer dashboards, Proxmox orchestration",
    icon: Boxes,
  },
  {
    label: "Cloud & Edge",
    detail: "AWS (EC2, S3, Elastic Beanstalk) with NGINX ingress care",
    icon: Cloud,
  },
  {
    label: "Backend Services",
    detail: "Java Spring Boot, Python (Django), Go/Node.js APIs",
    icon: Server,
  },
  {
    label: "Scripting & Linux",
    detail: "Linux admin, Bash & Zsh routines, Lua tooling",
    icon: Terminal,
  },
  {
    label: "Data & Observability",
    detail: "PostgreSQL, MongoDB, MySQL health & metrics",
    icon: Database,
  },
  {
    label: "Frontend & Mobile",
    detail: "React, Next.js, Vite, Tailwind CSS, React Native, Kotlin",
    icon: MonitorSmartphone,
  },
  {
    label: "Predictive Insights",
    detail: "Prophet & ARIMA baselines, ISO 50001 analytics, SQL models",
    icon: LineChart,
  },
  {
    label: "Team Enablement",
    detail: "SCRUM facilitation, leadership, assertive communication",
    icon: Users,
  },
];

const contacts = [
  {
    label: "Email",
    display: "leonoriega100@gmail.com",
    href: "mailto:leonoriega100@gmail.com",
    copyValue: "leonoriega100@gmail.com",
  },
  {
    label: "LinkedIn",
    display: "@leo-noriega",
    href: "https://www.linkedin.com/in/leo-noriega",
    copyValue: "https://www.linkedin.com/in/leo-noriega",
  },
  {
    label: "Github",
    display: "@leo-noriega",
    href: "https://github.com/Leo-Noriega/",
    copyValue: "https://github.com/Leo-Noriega/",
  },
];

function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs));
}

export default function Page() {
  const [activeDoc, setActiveDoc] = useState<DocKey | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Clipboard is unavailable in this browser");
    }
  };

  useEffect(() => {
    if (!activeDoc) return;

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDoc(null);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeDoc]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-28 h-64 w-64 rounded-full bg-cyan-500/15 blur-[120px] animate-pulse [animation-duration:12s] md:h-80 md:w-80" />
        <div className="absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[150px] animate-pulse [animation-duration:14s] [animation-delay:2s] md:h-96 md:w-96" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
      <Toaster position="top-right" theme="dark" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20 sm:px-10">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-cyan-300/70">
            Backend · Automation · Cloud
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
              Leonardo Noriega
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              Software Developer&nbsp;| Backend, Automation &amp; Cloud
              (DevOps/SRE)
            </p>
            <div className="h-px w-32 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300/30 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-4">
            {(Object.keys(documents) as DocKey[]).map((key) => {
              const doc = documents[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveDoc(key)}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/70 px-6 py-4 text-left text-slate-100 shadow-lg transition-all",
                    "hover:border-cyan-400/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70",
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                      `bg-gradient-to-br ${doc.accent}`,
                      "group-hover:opacity-70",
                    )}
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="text-lg font-medium">{doc.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-white" />
                  </div>
                  <p className="relative mt-1 text-sm text-slate-400">
                    Mac-style quick look preview
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">
                Systems toolkit
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-50">
                DevOps Toolchain
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {toolchain.map((tool) => (
              <div
                key={tool.label}
                className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-inner shadow-black/50 backdrop-blur transition hover:border-cyan-400/40 supports-[backdrop-filter]:bg-zinc-900/60"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-3 text-cyan-300">
                    <tool.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-slate-50">
                      {tool.label}
                    </p>
                    <p className="text-sm text-slate-400">{tool.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">
              Contact signals
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-50">
              Contact &amp; Copy-to-Clipboard
            </h2>
          </div>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 transition hover:border-cyan-400/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {contact.label}
                  </p>
                  <p className="text-lg font-medium text-slate-50">
                    {contact.display}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopy(contact.copyValue)}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  >
                    <ClipboardIcon className="h-4 w-4" />
                    Copy
                  </button>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-sm text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {activeDoc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              layout
              role="dialog"
              aria-modal="true"
              className="relative w-[min(94vw,980px)] overflow-hidden rounded-[26px] border-0 bg-[#05070d]/75 shadow-[0_30px_120px_-50px_rgba(0,0,0,0.95)]"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.8,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-end gap-1 px-5 py-2.5">
                <a
                  href={documents[activeDoc].file}
                  download
                  className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:border-white/50"
                >
                  <Download className="h-3 w-3" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="rounded-full border border-white/25 bg-white/15 p-1.5 text-slate-50 transition hover:bg-white/25"
                  aria-label="Close"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="px-4 pb-4">
                <object
                  title={`Preview ${documents[activeDoc].label}`}
                  data={`${documents[activeDoc].file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="h-[80vh] min-h-[520px] w-full rounded-[20px]"
                  style={{ margin: "0 auto", display: "block" }}
                >
                  <iframe
                    title={`Preview ${documents[activeDoc].label}`}
                    src={`${documents[activeDoc].file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="h-full w-full rounded-[20px]"
                  />
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
