import React, { useEffect, useState } from "react";

const sections = [
  "hero",
  "about",
  "snapshot",
  "products",
  "industries",
  "rnd",
  "sustainability",
  "contact",
];

export default function DotNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          title={id}
          aria-label={`Scroll to ${id}`}
          className={`rounded-full transition-all duration-300 ${
            activeSection === id
              ? "w-[8px] h-[8px] scale-125"
              : "w-[4px] h-[4px] scale-100"
          }`}
          style={{
            backgroundColor: "#ffffff",
            display: "block",
          }}
        />
      ))}
    </div>
  );
}
