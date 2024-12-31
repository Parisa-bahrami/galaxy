import { useEffect } from "react";

const useAbsorbButton = () => {
  // Absorb buttons
  useEffect(() => {
    const animateIt = (e) => {
      const container = e.currentTarget;
      const button = container.querySelector(".absorb-button");
      const { clientX: x, clientY: y } = e;

      // Check if there's a button
      if (!button) return;

      const rect = button?.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(centerX - x, centerY - y);

      const move = 25;
      const threshold = 100; // Distance threshold

      if (dist < threshold) {
        const xMove = ((x - centerX) / threshold) * move;
        const yMove = ((y - centerY) / threshold) * move;

        button.style.transform = `translate(${xMove}px, ${yMove}px)`;
      } else {
        button.style.transform = "";
      }
    };

    const resetPosition = (e) => {
      const container = e.currentTarget;
      const button = container.querySelector(".absorb-button");

      // Check if there's a button
      if (!button) return;

      button.style.transform = "";
    };

    const absorbContainers = document.querySelectorAll(".absorb-container");

    absorbContainers.forEach((c) => {
      c.addEventListener("mousemove", animateIt);
      c.addEventListener("mouseleave", resetPosition);
    });

    return () => {
      absorbContainers.forEach((c) => {
        c.removeEventListener("mousemove", animateIt);
        c.removeEventListener("mouseleave", resetPosition);
      });
    };
  }, []);
};

export default useAbsorbButton;
