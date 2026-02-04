const Rebirth = {
    count: 0,
    canRebirth() { return Game.p.lv >= 50; },
    execute() {
        if(!this.canRebirth()) {
            Logger.log("Chưa đủ tu vi để Luân hồi (Cần cấp 50)!");
            return;
        }
        this.count++;
        Game.p.lv = 1;
        Game.p.dmg += 200 * this.count; // Sức mạnh vĩnh cửu
        Game.p.maxHp += 1000;
        Game.p.hp = Game.p.maxHp;
        Logger.log(`✨ LUÂN HỒI THÀNH CÔNG LẦN ${this.count}! Sức mạnh tăng vọt.`);
        VFX.spawn(Game.width/2, Game.height/2, '#fff', 100);
    },
    getAuraColor() {
        const auras = ['#ffffff', '#00ff00', '#0000ff', '#ff00ff', '#ff0000', '#gold'];
        return auras[Math.min(this.count, auras.length - 1)];
    }
};

