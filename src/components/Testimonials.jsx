const testimonials = [
  {
    name: "Emily Carter",
    role: "IT Manager",
    company: "TechNova Inc.",
    testimonial:
      "SoftSell helped us offload unused licenses and recoup costs. Fast and transparent!",
  },
  {
    name: "John Rivera",
    role: "CFO",
    company: "Business360",
    testimonial:
      "We turned idle assets into real value. Great team and amazing support throughout.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl font-bold mb-8 text-center"
          style={{
            color: "var(--color-text-strong)",
            transition: "color 0.3s",
          }}
        >
          What Our Customers Say
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:justify-center">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow p-6 max-w-md mx-auto flex-1 flex flex-col border transition-colors duration-300"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <p
                className="italic mb-6 leading-relaxed transition-colors duration-300"
                style={{
                  color: "var(--color-text-base)",
                }}
              >
                &ldquo;{t.testimonial}&rdquo;
              </p>
              <div className="mt-auto flex flex-col items-start">
                <span
                  className="font-semibold"
                  style={{
                    color: "var(--color-accent, var(--color-text-strong))",
                  }}
                >
                  {t.name}
                </span>
                <span
                  className="text-xs"
                  style={{
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}