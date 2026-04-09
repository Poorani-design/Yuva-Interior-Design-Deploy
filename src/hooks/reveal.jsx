import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;