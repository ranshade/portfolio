import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { siteConfig } from "../data/siteConfig.js";
import Reveal from "./Reveal.jsx";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Frontend-only for now. To connect a backend or email service
    // (e.g. Formspree, EmailJS, or a custom API route), send `form`
    // to that endpoint here instead of just setting local status.
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 max-w-2xl text-display-md font-semibold">
            Have a project in mind? Let&rsquo;s talk.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-mist-500">
            Whether you have a clear brief or just an idea you&rsquo;re testing, I&rsquo;d be glad
            to hear about it. I usually reply within a day or two.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal delay={80}>
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-mist-300 transition-colors hover:text-mist-100"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-signal-cyan">
                  <Mail size={17} />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-mist-300">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-signal-violet">
                  <MapPin size={17} />
                </span>
                {siteConfig.location}
              </div>

              <div className="flex items-center gap-4 pt-2">
                {Object.entries(siteConfig.social).map(([key, url]) => {
                  const Icon = socialIcons[key];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={key}
                      className="btn-icon text-mist-500 hover:text-signal-indigo"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-mist-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full resize-none rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors focus:border-signal-indigo"
                  placeholder="Tell me a bit about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Send message
              </button>

              {status === "success" && (
                <p role="status" className="text-sm font-medium text-signal-cyan">
                  Thanks — your message has been sent. I&rsquo;ll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-mist-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-600 transition-colors focus:border-signal-indigo"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}