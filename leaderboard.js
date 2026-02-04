const Leaderboard = {
    data: [
        { name: "Độc Cô Cầu Bại", level: 99, rebirth: 10 },
        { name: "Lệnh Hồ Xung", level: 85, rebirth: 5 },
        { name: "Tiêu Phong", level: 80, rebirth: 4 }
    ],
    render() {
        let html = '<div class="panel" style="left:50%; top:20px; transform:translateX(-50%); width:200px; text-align:center">';
        html += '<b style="color:cyan">THIÊN BẢNG</b><hr>';
        this.data.forEach((u, i) => {
            html += `<div style="font-size:11px">${i+1}. ${u.name} - L.${u.level} (R${u.rebirth})</div>`;
        });
        // Thêm chính mình vào cuối
        html += `<div style="color:var(--gold); border-top:1px solid #444">Bạn: L.${Game.p.lv} (R${Rebirth.count})</div>`;
        return html + '</div>';
    }
};

