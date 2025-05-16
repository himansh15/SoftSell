import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  // Initialize from localStorage first, then from prefers-color-scheme
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };

  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-slate-700 transition border"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle Dark Mode"
    >
      {dark ? (
        // Sun Icon (light mode)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
          <path d="M12 3v1.75a.75.75 0 01-1.5 0V3h1.5zm0 15.5v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V18.5h1.5zm9-6.25c0 .41-.34.75-.75.75H21V12a.75.75 0 01-.75-.75v-1.5A.75.75 0 0121 9v1.75c.41 0 .75.34.75.75zm-15.5 0A.75.75 0 013 12v1.75c0 .41.34.75.75.75H6v-3H3.75zm12.02-5.37a.75.75 0 011.06 1.06l-1.24 1.24a.75.75 0 11-1.06-1.06l1.24-1.24zM7.88 16.12a.75.75 0 01-1.06-1.06l1.24-1.24a.75.75 0 111.06 1.06l-1.24 1.24zm8.24 8.24a.75.75 0 01-1.06 0l-1.24-1.24a.75.75 0 011.06-1.06l1.24 1.24a.75.75 0 010 1.06zm-8.24-8.24a.75.75 0 010-1.06l1.24-1.24a.75.75 0 111.06 1.06l-1.24 1.24a.75.75 0 01-1.06 0z" />
        </svg>
      ) : (
        // Moon Icon (dark mode)
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.293 14.707a8 8 0 01-11.314-11.314 1 1 0 00-1.414-1.415A10 10 0 1019.425 15.12a1 1 0 00-1.415-1.414 8.047 8.047 0 01-0.717 0.993z" />
        </svg>
      )}
    </button>
  );
}