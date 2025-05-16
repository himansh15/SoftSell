import { useState } from "react";
const licenseTypes = ["Microsoft", "Adobe", "Autodesk", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name) errs.name = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email required";
    if (!form.company) errs.company = "Required";
    if (!form.license) errs.license = "Required";
    if (!form.message) errs.message = "Required";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4 max-w-xl">
        <h2
          className="text-2xl font-bold mb-8 text-center"
          style={{
            color: "var(--color-text-strong)",
            transition: "color 0.3s",
          }}
        >
          Contact Us
        </h2>
        {submitted ? (
          <div
            className="p-8 rounded text-lg text-center shadow"
            style={{
              background: "var(--color-success-bg, #e6fbf6)",
              color: "var(--color-success-text, #037655)",
              transition: "background 0.3s, color 0.3s",
            }}
          >
            Thank you! We'll contact you very soon.
          </div>
        ) : (
          <form
            className="rounded shadow p-8 grid gap-4"
            onSubmit={handleSubmit}
            noValidate
            style={{
              background: "var(--color-surface)",
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--color-text-base)", transition: "color 0.3s" }}
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
                className="w-full rounded px-3 py-2 border outline-none focus:ring"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: errors.name
                    ? "var(--color-error, #dc2626)"
                    : "var(--color-border-subtle, #e5e7eb)",
                  transition: "all 0.2s",
                }}
              />
              {errors.name && (
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-error, #dc2626)" }}
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--color-text-base)" }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
                className="w-full rounded px-3 py-2 border outline-none focus:ring"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: errors.email
                    ? "var(--color-error, #dc2626)"
                    : "var(--color-border-subtle, #e5e7eb)",
                  transition: "all 0.2s",
                }}
              />
              {errors.email && (
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-error, #dc2626)" }}
                >
                  {errors.email}
                </div>
              )}
            </div>
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--color-text-base)" }}
              >
                Company
              </label>
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                autoComplete="off"
                className="w-full rounded px-3 py-2 border outline-none focus:ring"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: errors.company
                    ? "var(--color-error, #dc2626)"
                    : "var(--color-border-subtle, #e5e7eb)",
                  transition: "all 0.2s",
                }}
              />
              {errors.company && (
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-error, #dc2626)" }}
                >
                  {errors.company}
                </div>
              )}
            </div>
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--color-text-base)" }}
              >
                License Type
              </label>
              <select
                name="license"
                value={form.license}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 border outline-none focus:ring"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: errors.license
                    ? "var(--color-error, #dc2626)"
                    : "var(--color-border-subtle, #e5e7eb)",
                  transition: "all 0.2s",
                }}
              >
                <option value="">Select one</option>
                {licenseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.license && (
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-error, #dc2626)" }}
                >
                  {errors.license}
                </div>
              )}
            </div>
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: "var(--color-text-base)" }}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 border outline-none focus:ring"
                style={{
                  background: "var(--color-input-bg, var(--color-surface))",
                  color: "var(--color-text-base)",
                  borderColor: errors.message
                    ? "var(--color-error, #dc2626)"
                    : "var(--color-border-subtle, #e5e7eb)",
                  transition: "all 0.2s",
                }}
              />
              {errors.message && (
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-error, #dc2626)" }}
                >
                  {errors.message}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded shadow font-semibold"
              style={{
                background: "var(--color-accent, #6365f1)",
                color: "var(--color-button-text, #fff)",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}