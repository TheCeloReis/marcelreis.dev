import { useEffect, useState } from "react";

function generateStars(dimension: number, quantity: number) {
  if (!process.browser) {
    return "";
  }

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

function getRadius() {
  return process.browser
    ? Math.max(window.innerHeight, window.innerWidth)
    : 500;
}

const initialRadius = 0;
const initialStars = {
  small: "",
  medium: "",
  large: "",
};

type StarsType = Record<"small" | "medium" | "large", string>;
export const useStars = (): StarsType => {
  const [stars, setStars] = useState(initialStars);
  const [radius, setRadius] = useState(initialRadius);

  useEffect(() => {
    setStars({
      small: generateStars(radius, radius * 2),
      medium: generateStars(radius, radius * 0.25),
      large: generateStars(radius, radius * 0.0625),
    });
  }, [radius]);

  useEffect(() => {
    const resize = () => setRadius(getRadius);
    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return stars;
};
