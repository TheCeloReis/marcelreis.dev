import { useState, useEffect } from "react";

function generateStars(dimension: number, quantity: number) {
  let boxShadows = "";

  for (let i = 0; i < quantity; i++) {
    const { x, y } = getCordinates(dimension);
    boxShadows += `, ${x}px ${y}px #fff`;
  }

  return boxShadows.substr(2);
}

function getCordinates(radius: number) {
  const a = Math.random() * 2 * Math.PI;
  const r = radius * Math.sqrt(Math.random());
  return {
    x: r * Math.cos(a),
    y: r * Math.sin(a),
  };
}

export const useStars = () => {
  const [stars, setStars] = useState({ small: "", medium: "", large: "" });
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    setStars({
      small: generateStars(radius, radius * 2),
      medium: generateStars(radius, radius * 0.25),
      large: generateStars(radius, radius * 0.0625),
    });
  }, [radius]);

  useEffect(() => {
    const resize = () =>
      window.requestAnimationFrame(() =>
        setRadius(Math.max(window.innerHeight, window.innerWidth))
      );

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return stars;
};
