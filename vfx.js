const VFX = {
    items: [],
    spawn(x, y, color, type = 'particle') {
        for(let i=0; i<15; i++) {
            this.items.push({
                x, y, c: color, t: type,
                vx: (Math.random()-0.5)*12,
                vy: (Math.random()-0.5)*12,
                l: 30
            });
        }
    },
    updateAndDraw(ctx) {
        this.items = this.items.filter(p => {
            ctx.globalAlpha = p.l / 30;
            ctx.fillStyle = p.c;
            ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, 7); ctx.fill();
            p.x += p.vx; p.y += p.vy; p.l--;
            return p.l > 0;
        });
        ctx.globalAlpha = 1;
    }
};

