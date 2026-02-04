class Stickman {
    constructor(x, y, color, isPlayer = false) {
        this.x = x; this.y = y; this.color = color;
        this.hp = 200; this.maxHp = 200; this.isPlayer = isPlayer;
    }
    draw(ctx, lean = 0, scale = 1) {
        ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(lean);
        ctx.strokeStyle = this.color; ctx.lineWidth = 4 * scale;
        // Body logic
        ctx.beginPath(); ctx.arc(0, -45*scale, 12*scale, 0, 7); ctx.stroke(); // Đầu
        ctx.beginPath(); ctx.moveTo(0, -35*scale); ctx.lineTo(0, 5*scale); ctx.stroke(); // Thân
        ctx.restore();
    }
}

