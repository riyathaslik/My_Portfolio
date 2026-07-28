/* ==========================================================================
   diveCanvas — a "diving into data" warp effect.
   Symbols (0/1, %, Σ, small bar glyphs) fly from the distance toward the
   viewer and converge near the hero title, like diving through a stream
   of data. Falls back to a static state if reduced-motion is requested.
   ========================================================================== */
(function () {
    const canvas = document.getElementById('diveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const SYMBOLS = ['01', '10', '1', '0', '%', 'Σ', '#', '~', '▮▮', '◤'];
    const COLORS = ['#8FD1D6', '#F2A93B', '#4FA9B3', '#E7EEF3'];
    let particles = [];
    let w, h, cx, cy;
    let mouseX = 0, mouseY = 0;

    function resize() {
        w = canvas.width = canvas.offsetWidth * devicePixelRatio;
        h = canvas.height = canvas.offsetHeight * devicePixelRatio;
        cx = w / 2;
        cy = h / 2;
    }

    function makeParticle(randomZ) {
        return {
            x: (Math.random() - 0.5) * w,
            y: (Math.random() - 0.5) * h,
            z: randomZ ? Math.random() : 1,
            speed: 0.0022 + Math.random() * 0.0022,
            symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
    }

    function init() {
        resize();
        const count = w < 900 ? 60 : 110;
        particles = Array.from({ length: count }, () => makeParticle(true));
    }

    function frame() {
        ctx.clearRect(0, 0, w, h);
        const originX = cx + mouseX * 20;
        const originY = cy + mouseY * 20;

        for (const p of particles) {
            p.z -= p.speed;
            if (p.z <= 0.02) {
                Object.assign(p, makeParticle(false));
                p.z = 1;
            }
            const scale = 1 / p.z;
            const px = originX + p.x * scale * 0.06;
            const py = originY + p.y * scale * 0.06;
            const size = Math.max(0.5, (1 - p.z) * 22);
            const alpha = Math.min(1, (1 - p.z) * 1.3);

            if (px < -50 || px > w + 50 || py < -50 || py > h + 50) continue;

            ctx.globalAlpha = alpha * 0.85;
            ctx.fillStyle = p.color;
            ctx.font = `600 ${size}px 'JetBrains Mono', monospace`;
            ctx.textAlign = 'center';
            ctx.fillText(p.symbol, px, py);
        }
        ctx.globalAlpha = 1;
        if (!prefersReducedMotion) requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    init();
    if (prefersReducedMotion) {
        // Draw a single calm static frame instead of animating.
        frame();
    } else {
        requestAnimationFrame(frame);
    }
})();

/* ---------------- Scroll reveal for sections ------------------------------ */
(function () {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || items.length === 0) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
})();
