const Cheats = {
    init() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Insert') {
                const code = prompt("Nhập Lệnh Bài:");
                this.apply(code);
            }
        });
    },
    apply(code) {
        if (code === "VODICH") {
            Game.p.hp = 999999; Game.p.dmg = 9999;
            Logger.log("Đã kích hoạt chế độ Vô Địch!");
        }
        if (code === "LAMGIAU") {
            Game.p.gold += 100000;
            Logger.log("Nhận 100.000 Vàng!");
        }
    }
};

