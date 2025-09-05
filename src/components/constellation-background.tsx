"use client"

import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
}

export function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-generate stars on resize
      const newStars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 10000); // Adjust density
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      starsRef.current = newStars;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas(); // Initial setup

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star, i) => {
        // Star movement
        star.x += star.vx;
        star.y += star.vy;

        // Wall bouncing
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;

        // Interaction with mouse
        const distanceToMouse = Math.hypot(star.x - mouseRef.current.x, star.y - mouseRef.current.y);
        let targetOpacity = star.opacity;
        if (distanceToMouse < 150) {
          targetOpacity = Math.min(1, star.opacity + (1 - distanceToMouse / 150) * 0.8);
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${targetOpacity})`;
        ctx.fill();

        // Draw constellation lines
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const otherStar = starsRef.current[j];
          const distance = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, 0.3 - distance / 100)})`;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'linear-gradient(to bottom right, #ff4500 0%, #1b2735 60%, #000000 100%)' }}
    />
  );
};
