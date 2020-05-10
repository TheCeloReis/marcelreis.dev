const canvas2 = document.createElement("canvas");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 100;
canvas2.height = 100;
const half = canvas2.width / 2;

const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0, "#fff");
gradient2.addColorStop(0.2, "transparent");
ctx2.fillStyle = gradient2;

ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

const random = (min, max) => {
  if (!max) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function maxOrbit(x, y) {
  const max = Math.max(x, y);
  return Math.round(Math.sqrt(max * max + max * max)) / 2;
}

export class Animation {
  constructor(ctx, dimensions, maxStars) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.maxStars = maxStars;
    this.stars = [];
  }

  init() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.globalAlpha = 0.8;

    for (let i = 0; i < this.maxStars; i++) {
      this.stars.push(new Star(this.ctx, this.dimensions, this.maxStars));
    }
    window.requestAnimationFrame(() => this.animate());
  }

  animate() {
    this.stars.forEach((star) => star.animate());
  }
}

class Star {
  constructor(ctx, dimension, maxStars) {
    this.orbitRadius = random(maxOrbit(dimension.width, dimension.height));
    this.radius = random(60, this.orbitRadius) / 12;

    this.orbit = { x: dimension.width / 2, y: dimension.height / 2 };
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 500000;
    this.alpha = random(2, 10) / 10;
    this.previousLocation = { x: 0, y: 0 };

    this.ctx = ctx;
  }

  paint() {
    const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbit.x;
    const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbit.y;
    const twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    this.ctx.globalAlpha = this.alpha;

    this.timePassed += this.speed;

    this.previousLocation = { x: x - this.radius / 2, y: y - this.radius / 2 };

    this.ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
  }

  animate() {
    this.ctx.clearRect(
      this.previousLocation.x,
      this.previousLocation.y,
      this.radius,
      this.radius
    );
    this.paint();

    window.requestAnimationFrame(() => this.animate());
  }
}
