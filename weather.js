const Weather = {
    type: 'rain', // 'clear', 'rain', 'night'
    drops: [],
    init() {
        for(let i=0; i<100; i++) this.drops.push({x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, s: Math.random()*10+10});
    },
    draw(ctx) {
        if(this.type === 'rain') {
            ctx.strokeStyle = 'rgba(200,200,255,0.3)';
            this.drops.forEach(d => {
                ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x-2, d.y+d.s); ctx.stroke();
                d.y += d.s; if(d.y > window.innerHeight) d.y = -20;
            });
        }
        if(this.type === 'night') {
            ctx.fillStyle = 'rgba(0,0,20,0.4)';
            ctx.fillRect(0,0, window.innerWidth, window.innerHeight);
        }
    }
};

