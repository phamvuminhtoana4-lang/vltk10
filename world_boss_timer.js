const WorldBossTimer = {
    timeLeft: 300, // 5 phút
    active: false,
    update() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
        } else if (!this.active) {
            this.active = true;
            BossSystem.spawn(Game.p.x, Game.p.y);
            Logger.log("🔥 MA VƯƠNG ĐÃ XUẤT THẾ! TIÊU DIỆT NGAY!");
        }
    },
    render() {
        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        return `<div class="panel" style="top:10px; left:50%; transform:translateX(-50%); color:red; border-color:red">
            BOSS XUẤT HIỆN SAU: ${m}:${s < 10 ? '0' + s : s}
        </div>`;
    }
};

