"use client";

import { useEffect, useRef } from "react";

function hexToRgb(hex: string) {
    const normalized = hex.replace("#", "");
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return { r, g, b };
}

export default function AuroraBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

        const rootStyles = getComputedStyle(document.documentElement);
        const bg =
            rootStyles.getPropertyValue("--ion-background-color").trim() ||
            rootStyles.getPropertyValue("--bg").trim() ||
            "#001e49";
        const c1 = rootStyles.getPropertyValue("--ion-color-primary").trim() || "#69bfaf";
        const c2 = rootStyles.getPropertyValue("--ion-color-secondary").trim() || "#8cffea";
        const c3 = rootStyles.getPropertyValue("--ion-color-tertiary").trim() || "#468075";

        const rgb1 = hexToRgb(c1);
        const rgb2 = hexToRgb(c2);
        const rgb3 = hexToRgb(c3);

        let animationFrameId = 0;
        let t = 0;

        const stars = Array.from({ length: 70 }, (_, i) => {
            const seed = i * 999;
            return {
                x: (Math.sin(seed) * 0.5 + 0.5) * window.innerWidth,
                y: (Math.cos(seed * 1.3) * 0.5 + 0.5) * window.innerHeight,
                r: ((Math.sin(seed * 2.1) * 0.5 + 0.5) * 1.2 + 0.3) as number,
                a: ((Math.cos(seed * 0.7) * 0.5 + 0.5) * 0.55 + 0.15) as number,
            };
        });

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize, { passive: true });

        const drawStars = (w: number, h: number) => {
            ctx.save();
            for (const s of stars) {
                const twinkle = 0.5 + 0.5 * Math.sin(t * 0.8 + s.x * 0.01);
                ctx.fillStyle = `rgba(255,255,255,${s.a * twinkle})`;
                ctx.beginPath();
                ctx.arc(s.x % w, s.y % h, s.r, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        };

        const drawAuroraBand = (w: number, h: number, bandIndex: number) => {
            const baseY = h * (0.42 + bandIndex * 0.08);
            const amp1 = 80 - bandIndex * 10;
            const amp2 = 42 - bandIndex * 6;

            const grad = ctx.createLinearGradient(0, baseY - 190, w, baseY + 190);
            grad.addColorStop(0.0, `rgba(${rgb2.r},${rgb2.g},${rgb2.b},0.00)`);
            grad.addColorStop(0.22, `rgba(${rgb2.r},${rgb2.g},${rgb2.b},0.28)`);
            grad.addColorStop(0.52, `rgba(${rgb1.r},${rgb1.g},${rgb1.b},0.24)`);
            grad.addColorStop(0.82, `rgba(${rgb3.r},${rgb3.g},${rgb3.b},0.16)`);
            grad.addColorStop(1.0, `rgba(${rgb3.r},${rgb3.g},${rgb3.b},0.00)`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 96 - bandIndex * 12;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            ctx.shadowColor = `rgba(${rgb2.r},${rgb2.g},${rgb2.b},0.35)`;
            ctx.shadowBlur = 34;

            ctx.beginPath();
            ctx.moveTo(0, baseY);

            const step = 10;
            const phase = t + bandIndex * 0.9;
            for (let x = 0; x <= w + step; x += step) {
                const y =
                    baseY +
                    Math.sin(x * 0.002 + phase) * amp1 +
                    Math.sin(x * 0.005 + phase * 1.15) * amp2 +
                    Math.sin(x * 0.001 + phase * 0.7) * 28;
                ctx.lineTo(x, y);
            }

            ctx.stroke();
            ctx.shadowBlur = 0;
        };

        const render = () => {
            t += prefersReducedMotion ? 0.0035 : 0.0105;

            const w = window.innerWidth;
            const h = window.innerHeight;

            ctx.clearRect(0, 0, w, h);

            // Base background (solid)
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            // Space depth
            const space = ctx.createRadialGradient(
                w * 0.6,
                h * 0.2,
                40,
                w * 0.55,
                h * 0.25,
                Math.max(w, h)
            );
            space.addColorStop(0, "rgba(255,255,255,0.05)");
            space.addColorStop(0.4, "rgba(0,0,0,0.0)");
            space.addColorStop(1, "rgba(0,0,0,0.45)");
            ctx.fillStyle = space;
            ctx.fillRect(0, 0, w, h);

            drawStars(w, h);

            // Make aurora pop a bit more
            ctx.globalCompositeOperation = "screen";
            for (let i = 0; i < 5; i++) {
                drawAuroraBand(w, h, i);
            }
            ctx.globalCompositeOperation = "source-over";

            // Vignette
            const vignette = ctx.createRadialGradient(
                w / 2,
                h / 2,
                Math.min(w, h) * 0.2,
                w / 2,
                h / 2,
                Math.max(w, h) * 0.75
            );
            vignette.addColorStop(0, "rgba(0,0,0,0)");
            vignette.addColorStop(1, "rgba(0,0,0,0.38)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, w, h);

            if (!prefersReducedMotion) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 h-full w-full"
            aria-hidden="true"
        />
    );
}
