const stories = [
  {
    name: "Amelia",
    role: "Product Designer",
    message:
      "I keep Agentic Hello open during design critiques. It reminds me that every product should feel friendly and inclusive."
  },
  {
    name: "Mateo",
    role: "Frontend Developer",
    message:
      "The gradient themes inspired a small side project. I loved how easy it was to customize and deploy, so I forked the repo!"
  },
  {
    name: "Saanvi",
    role: "Community Organizer",
    message:
      "We use these greetings in our welcome email drips. They set a warm tone and make members smile before the first meetup."
  }
];

export default function StoriesPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-50">Stories from the Community</h1>
      <p className="text-slate-300">
        A few ways friends around the world weave Agentic Hello into their day-to-day routines. Share your own
        story and keep the positivity going.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((story) => (
          <article key={story.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h2 className="text-lg font-semibold text-emerald-400">{story.name}</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{story.role}</p>
            <p className="mt-4 text-sm text-slate-300">{story.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
