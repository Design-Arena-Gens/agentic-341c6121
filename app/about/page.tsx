export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-50">About Agentic Hello</h1>
      <p className="text-slate-300">
        Agentic Hello is a micro-experience designed to brighten your day with a rotation of friendly greetings
        from across the globe. It is built with the Next.js App Router and deploys seamlessly to Vercel so you
        can share the delight instantly.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-lg font-semibold text-emerald-400">Why we made this</h2>
          <p className="mt-3 text-sm text-slate-300">
            Friendly greetings create connection. This project showcases a polished Next.js experience with a
            dash of animation and personalization, perfect for sharing a smile during a busy day.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h2 className="text-lg font-semibold text-emerald-400">How it works</h2>
          <p className="mt-3 text-sm text-slate-300">
            The frontend rotates pre-curated greetings using a lightweight interval hook. Theme selection
            updates gradient backgrounds, while the navigation keeps the experience cohesive across pages.
          </p>
        </div>
      </div>
    </section>
  );
}
