'use client';

import { FormEvent, useMemo, useState } from 'react';

const projectOptions = ['SaaS MVP', 'AI web app', 'Custom agent', 'Internal tool', 'Automation'];
const budgetOptions = ['<$15k', '$15k–$30k', '$30k–$60k', '>$60k'];

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  hp: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    hp: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const isValid = useMemo(() => {
    return form.name && form.email && form.projectType && form.budget && form.message.length >= 20;
  }, [form]);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.projectType) nextErrors.projectType = 'Choose a project type.';
    if (!form.budget) nextErrors.budget = 'Select your budget range.';
    if (form.message.trim().length < 20) nextErrors.message = 'Please describe your needs in at least 20 characters.';
    if (form.hp) nextErrors.hp = 'Spam detected.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors(data.errors ?? {});
        setServerMessage(data.error ?? 'There was a problem submitting the form.');
        setStatus('error');
        return;
      }
      setStatus('success');
      setServerMessage('Thanks! Your request has been submitted. We’ll reply soon.');
      setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '', hp: '' });
    } catch (error) {
      setStatus('error');
      setServerMessage('Unable to send the request right now. Please try again later.');
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Name</span>
          <input
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            className={`mt-2 w-full rounded-3xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${errors.name ? 'border-rose-500' : 'border-white/10 focus:border-glow'}`}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-rose-400">{errors.name}</p> : null}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className={`mt-2 w-full rounded-3xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${errors.email ? 'border-rose-500' : 'border-white/10 focus:border-glow'}`}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-rose-400">{errors.email}</p> : null}
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-slate-200">Company (optional)</span>
        <input
          value={form.company}
          onChange={(event) => handleChange('company', event.target.value)}
          className="mt-2 w-full rounded-3xl border border-white/10 px-4 py-3 bg-slate-950 text-white outline-none transition focus:border-glow"
          placeholder="Your company name"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-200">Project type</span>
          <select
            value={form.projectType}
            onChange={(event) => handleChange('projectType', event.target.value)}
            className={`mt-2 w-full rounded-3xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${errors.projectType ? 'border-rose-500' : 'border-white/10 focus:border-glow'}`}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          >
            <option value="">Choose a type</option>
            {projectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType ? <p id="projectType-error" className="mt-2 text-sm text-rose-400">{errors.projectType}</p> : null}
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-200">Budget</span>
          <select
            value={form.budget}
            onChange={(event) => handleChange('budget', event.target.value)}
            className={`mt-2 w-full rounded-3xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${errors.budget ? 'border-rose-500' : 'border-white/10 focus:border-glow'}`}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? 'budget-error' : undefined}
          >
            <option value="">Select a budget</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? <p id="budget-error" className="mt-2 text-sm text-rose-400">{errors.budget}</p> : null}
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-slate-200">Project brief</span>
        <textarea
          value={form.message}
          onChange={(event) => handleChange('message', event.target.value)}
          className={`mt-2 min-h-[160px] w-full rounded-[1.5rem] border px-4 py-4 bg-slate-950 text-white outline-none transition ${errors.message ? 'border-rose-500' : 'border-white/10 focus:border-glow'}`}
          placeholder="Describe the problem, audience, and desired outcome."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-400">{errors.message}</p> : null}
      </label>

      <label className="sr-only" htmlFor="hp">
        Leave this field empty
      </label>
      <input
        id="hp"
        name="hp"
        value={form.hp}
        onChange={(event) => handleChange('hp', event.target.value)}
        className="hidden"
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={!isValid || status === 'sending'}
        className="inline-flex w-full items-center justify-center rounded-full bg-glow px-6 py-3 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60 hover:-translate-y-0.5"
      >
        {status === 'sending' ? 'Sending…' : 'Send request'}
      </button>

      {serverMessage ? (
        <p className={`mt-3 text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-400'}`}>{serverMessage}</p>
      ) : null}
    </form>
  );
}
