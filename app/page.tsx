"use client";
import { useState } from "react";
import { Github, ArrowRight, Check, AlertCircle, UploadCloud, Mail, Lock } from "lucide-react";

const BUNDLE = "https://omerpoyraz.gumroad.com/l/nextjs-admin-bundle";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-sm font-bold text-[var(--brand)] mb-4">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("not-an-email");
  const emailOk = /.+@.+\..+/.test(email);
  const [plan, setPlan] = useState("pro");
  const [agree, setAgree] = useState(true);
  const [notify, setNotify] = useState(true);
  const [range, setRange] = useState(60);

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center gap-2">
          <span className="font-display font-bold">Tailwind<span className="text-[var(--brand)]">Forms</span></span>
          <a href="https://github.com/omer-poyraz/tailwind-form-components" className="ml-auto inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--surface-2)]"><Github size={16} /> Star</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">Tailwind Form Components</h1>
          <p className="text-[var(--muted)] mt-4">Accessible, copy-paste form controls for React + Tailwind — inputs, selects, toggles, validation and more.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Block title="Text inputs">
            <div><label className="lbl">Default</label><input className="inp" placeholder="you@example.com" /></div>
            <div>
              <label className="lbl">With icon</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                <input className="inp pl-9" placeholder="Email" />
              </div>
            </div>
            <div>
              <label className="lbl">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                <input type="password" className="inp pl-9" defaultValue="secret123" />
              </div>
            </div>
          </Block>

          <Block title="Validation states">
            <div>
              <label className="lbl">Email (live)</label>
              <input className={`inp ${emailOk ? "ok" : "err"}`} value={email} onChange={(e) => setEmail(e.target.value)} />
              <p className={`text-xs mt-1.5 inline-flex items-center gap-1 ${emailOk ? "text-emerald-600" : "text-rose-500"}`}>
                {emailOk ? <><Check size={13} /> Looks good</> : <><AlertCircle size={13} /> Enter a valid email</>}
              </p>
            </div>
            <div><label className="lbl">Disabled</label><input className="inp opacity-60 cursor-not-allowed" disabled defaultValue="Can't edit" /></div>
          </Block>

          <Block title="Select & textarea">
            <div>
              <label className="lbl">Plan</label>
              <select className="inp" value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option value="free">Free</option><option value="pro">Pro</option><option value="team">Team</option>
              </select>
            </div>
            <div><label className="lbl">Message</label><textarea className="inp !h-24 py-2 resize-none" placeholder="Write something…" /></div>
          </Block>

          <Block title="Toggles, checkbox & radio">
            <div className="flex items-center justify-between">
              <span className="text-sm">Email notifications</span>
              <button onClick={() => setNotify((v) => !v)} className={`relative w-11 h-6 rounded-full transition-colors ${notify ? "bg-[var(--brand)]" : "bg-[var(--border)]"}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${notify ? "translate-x-5" : ""}`} />
              </button>
            </div>
            <label className="flex items-center gap-2.5 text-sm cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 accent-[var(--brand)]" />
              I agree to the terms
            </label>
            <div className="flex gap-4">
              {["Monthly", "Yearly"].map((o, i) => (
                <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="billing" defaultChecked={i === 1} className="w-4 h-4 accent-[var(--brand)]" /> {o}
                </label>
              ))}
            </div>
          </Block>

          <Block title="File upload">
            <label className="flex flex-col items-center justify-center gap-2 h-32 rounded-xl border-2 border-dashed border-[var(--border)] cursor-pointer hover:border-[var(--brand)] hover:bg-[var(--surface-2)] transition-colors">
              <UploadCloud size={22} className="text-[var(--muted)]" />
              <span className="text-sm text-[var(--muted)]">Drag a file or <span className="text-[var(--brand)] font-medium">browse</span></span>
              <input type="file" className="hidden" />
            </label>
          </Block>

          <Block title="Range & submit">
            <div>
              <div className="flex justify-between text-sm mb-1"><span>Budget</span><span className="text-[var(--muted)]">${range}</span></div>
              <input type="range" min={0} max={100} value={range} onChange={(e) => setRange(Number(e.target.value))} className="w-full accent-[var(--brand)]" />
            </div>
            <button className="w-full h-11 rounded-xl bg-[var(--brand)] text-white font-medium hover:opacity-90">Save changes</button>
            <button className="w-full h-11 rounded-xl border border-[var(--border)] font-medium hover:bg-[var(--surface-2)]">Cancel</button>
          </Block>
        </div>

        <div className="card p-8 mt-12 text-center" style={{ background: "var(--brand-soft)" }}>
          <h2 className="font-display text-2xl font-bold">Need full dashboards too?</h2>
          <p className="text-[var(--muted)] mt-2 max-w-lg mx-auto">Six production-ready Next.js admin panels with forms, tables and charts built in.</p>
          <a href={BUNDLE} className="inline-flex items-center gap-2 mt-5 h-11 px-6 rounded-xl bg-[var(--brand)] text-white font-medium">Get all 6 for $99 <ArrowRight size={17} /></a>
        </div>

        <footer className="mt-12 pt-8 border-t border-[var(--border)] text-sm text-[var(--muted)] flex justify-between">
          <span>MIT © Ömer Poyraz</span>
          <a href="https://github.com/omer-poyraz/tailwind-form-components" className="hover:text-[var(--fg)]">GitHub</a>
        </footer>
      </main>
    </div>
  );
}
