const Mounts = {
    types: {
        'Ngựa': { speed: 1.5, color: '#8b4513' },
        'Hỏa Kỳ Lân': { speed: 2.5, color: '#ff4400' }
    },
    draw(ctx, x, y, type) {
        const m = this.types[type];
        ctx.strokeStyle = m.color;
        ctx.shadowBlur = 15; ctx.shadowColor = m.color;
        ctx.beginPath();
        ctx.ellipse(x, y + 20, 40, 15, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
    }
};

