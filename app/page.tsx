"use client";

import { useEffect, useMemo, useState } from "react";

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Hej",
  "Olá",
  "Merhaba",
  "Namaste",
  "Salam",
  "Halo"
];

const themes = [
  { name: "Aurora", gradient: "from-emerald-400 via-sky-400 to-purple-500" },
  { name: "Sunset", gradient: "from-orange-500 via-pink-500 to-purple-600" },
  { name: "Midnight", gradient: "from-indigo-500 via-indigo-700 to-slate-900" },
  { name: "Neon", gradient: "from-green-400 via-cyan-500 to-blue-600" }
];

export default function HomePage() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, []);

  const currentTheme = useMemo(() => themes[themeIndex], [themeIndex]);
  const currentGreeting = useMemo(() => greetings[greetingIndex], [greetingIndex]);

  return (
    <section className="flex flex-col gap-12">
      <div className="grid gap-6 md:grid-cols-[3fr_2fr] md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {currentGreeting}, {name ? name : "friend"}!
          </h1>
          <p className="text-lg text-slate-300">
            This playful interface rotates through friendly hellos from around the world. Enter your name,
            pick a theme, and share the love with someone new.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex flex-1 flex-col gap-2 text-sm text-slate-300">
              Your name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Type your name"
                className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-300 sm:max-w-xs">
              Theme
              <select
                value={themeIndex}
                onChange={(event) => setThemeIndex(Number(event.target.value))}
                className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-base text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
              >
                {themes.map((theme, index) => (
                  <option value={index} key={theme.name}>
                    {theme.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-1">
          <div className={`rounded-2xl bg-gradient-to-tr ${currentTheme.gradient} p-8 text-slate-50 shadow-2xl`}>
            <p className="text-xs uppercase tracking-[0.3em] text-white/80">Current greeting</p>
            <p className="mt-4 text-4xl font-semibold">{currentGreeting}!</p>
            <p className="mt-6 text-sm text-white/80">
              Share this greeting with someone new today and brighten their inbox.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {greetings.map((text, index) => (
          <div
            key={text}
            className={`rounded-2xl border border-slate-800 bg-slate-950/50 p-5 transition ${
              index === greetingIndex ? "border-emerald-500/80 shadow-lg shadow-emerald-500/20" : ""
            }`}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Greeting</p>
            <p className="mt-3 text-2xl font-semibold text-slate-100">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
