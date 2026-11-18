"use client";

import { useState } from "react";

export const supportOptions = [
  "Stress or pressure",
  "Overthinking",
  "Relationship concerns",
  "Past experiences affecting present",
  "Confidence or clarity",
  "Work-related challenges",
  "Support related to Identity",
  "Other",
];
export const durationOptions = ["Few Days", "Few Weeks", "Few Months", "More than 1 Year", "Other"];
export const timeOptions = ["Morning", "Evening", "Afternoon", "Other"];
export const identityOptions = ["Woman", "Man", "Non-binary", "Transgender", "Prefer to self-describe", "Prefer not to say"];

const input =
  // 16px on phones prevents iOS Safari from zooming into focused fields.
  "mt-2 w-full rounded-none border-0 border-b border-ink/60 bg-transparent px-0 py-2.5 text-base outline-none transition-colors focus:border-brand sm:text-[15px]";
const label = "block text-[15px]";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [supportError, setSupportError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const support = fd.getAll("support");
    if (support.length === 0) {
      setSupportError(true);
      return;
    }
    setSupportError(false);
    setStatus("sending");
    const payload = Object.fromEntries([...fd.entries()].filter(([k]) => k !== "support"));
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, support }),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className={label}>
          First Name *
          <input name="firstName" required autoComplete="given-name" className={input} />
        </label>
        <label className={label}>
          Last Name *
          <input name="lastName" required autoComplete="family-name" className={input} />
        </label>
        <label className={label}>
          Email *
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className={label}>
          How do you identify?
          <select name="identity" defaultValue="" className={`${input} cursor-pointer`}>
            <option value="" disabled>
              Choose an option
            </option>
            {identityOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Phone Number (WhatsApp Preferred) *
          <input name="phone" type="tel" required autoComplete="tel" className={input} />
        </label>
      </div>

      <fieldset aria-describedby={supportError ? "support-error" : undefined}>
        <legend className="text-[15px]">What would you like support with? *</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {supportOptions.map((o) => (
            <label key={o} className="flex items-center gap-3 text-[15px]">
              <input type="checkbox" name="support" value={o} className="h-4 w-4 accent-brand" />
              {o}
            </label>
          ))}
        </div>
        {supportError && (
          <p id="support-error" className="mt-2 text-[13px] text-red-600">
            Required
          </p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-[15px]">Since when have you been experiencing this? *</legend>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
          {durationOptions.map((o, i) => (
            <label key={o} className="flex items-center gap-2 text-[15px]">
              <input type="radio" name="since" value={o} required={i === 0} className="h-4 w-4 accent-brand" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-[15px]">Preferred time to connect *</legend>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
          {timeOptions.map((o, i) => (
            <label key={o} className="flex items-center gap-2 text-[15px]">
              <input type="radio" name="preferredTime" value={o} required={i === 0} className="h-4 w-4 accent-brand" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col items-start gap-4">
        <button type="submit" disabled={status === "sending"} className="btn-dark min-w-[140px] disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        <p role="status" aria-live="polite" className="text-[15px]">
          {status === "done" && "Thanks for submitting!"}
          {status === "error" && <span className="text-red-600">Something went wrong. Please try again or message us on WhatsApp.</span>}
        </p>
      </div>
    </form>
  );
}
