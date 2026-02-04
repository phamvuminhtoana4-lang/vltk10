const Arena = {
    active: false,
    opponent: null,
    enter() {
        this.active = true;
        this.opponent = new Stickman(Game.p.x + 400, Game.p.y, '#00ff00');
        this.opponent.hp = Game.p.maxHp * 2;
        this.opponent.isAI = true;
        Logger.log("⚔️ BẮT ĐẦU QUYẾT ĐẤU LÔI ĐÀI!");
    },
    update() {
        if(!this.active || !this.opponent) return;
        // AI Logic: Luôn giữ khoảng cách và áp sát để combo
        let dist = Math.hypot(Game.p.x - this.opponent.x, Game.p.y - this.opponent.y);
        if(dist > 100) {
            let a = Math.atan2(Game.p.y - this.opponent.y, Game.p.x - this.opponent.x);
            this.opponent.x += Math.cos(a) * 5;
            this.opponent.y += Math.sin(a) * 5;
        } else if(Math.random() < 0.05) {
            Game.p.hp -= 20; // AI đánh trúng
            VFX.spawn(Game.p.x, Game.p.y, '#f00');
        }
    },
    draw(ctx) {
        if(this.active && this.opponent) {
            this.opponent.draw(ctx, 0, 2);
            // Thanh máu đối thủ trên đầu
            ctx.fillStyle = 'red';
            ctx.fillRect(this.opponent.x - 50, this.opponent.y - 120, (this.opponent.hp/(Game.p.maxHp*2))*100, 10);
        }
    }
};
