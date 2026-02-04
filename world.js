class World {
    constructor() {
        this.env = [];
        for(let i=0; i<500; i++) {
            this.env.push({
                x: Math.random() * CONFIG.worldSize,
                y: Math.random() * CONFIG.worldSize,
                s: Math.random() * 30 + 10,
                c: Math.random() > 0.5 ? '#1a2e1a' : '#222'
            });
        }
    }
    draw(ctx, cam) {
        this.env.forEach(e => {
            ctx.fillStyle = e.c;
            ctx.beginPath(); ctx.arc(e.x, e.y, e.s, 0, 7); ctx.fill();
        });
    }
}

