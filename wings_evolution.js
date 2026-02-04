const Wings = {
    tiers: [
        { name: 'Yên Vũ', color: '#fff', size: 30, glow: 10 },
        { name: 'Hàn Băng', color: '#00f', size: 50, glow: 20 },
        { name: 'Phượng Hoàng', color: '#f00', size: 70, glow: 35 },
        { name: 'Thái Cổ Thần Dực', color: '#gold', size: 100, glow: 50 }
    ],
    draw(ctx, x, y, tierIndex) {
        const t = this.tiers[tierIndex];
        ctx.save();
        ctx.strokeStyle = t.color;
        ctx.shadowBlur = t.glow;
        ctx.shadowColor = t.color;
        ctx.lineWidth = 3;
        // Vẽ 2 cánh đối xứng
        for (let side of [-1, 1]) {
            ctx.beginPath();
            ctx.moveTo(x, y - 40);
            ctx.bezierCurveTo(x + 50 * side, y - 100, x + 100 * side, y, x, y + 20);
            ctx.stroke();
        }
        ctx.restore();
    }
};

