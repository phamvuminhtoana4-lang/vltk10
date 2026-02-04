const ComboSystem = {
    count: 0,
    lastTime: 0,
    multiplier: 1,
    hit() {
        const now = Date.now();
        if (now - this.lastTime < 1000) {
            this.count++;
            this.multiplier = 1 + Math.floor(this.count / 10) * 0.1;
        } else {
            this.count = 1;
            this.multiplier = 1;
        }
        this.lastTime = now;
    },
    render(ctx) {
        if (this.count > 1) {
            ctx.font = "bold 40px Arial";
            ctx.fillStyle = "orange";
            ctx.fillText(`${this.count} COMBO`, window.innerWidth - 200, 150);
            ctx.font = "15px Arial";
            ctx.fillText(`Sát thương x${this.multiplier.toFixed(1)}`, window.innerWidth - 200, 175);
        }
    }
};

