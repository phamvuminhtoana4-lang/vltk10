const Status = {
    update(p) {
        const top = document.getElementById('ui-top-left');
        top.className = 'panel';
        top.innerHTML = `
            <b>${p.sect.n} - ${CONFIG.ranks[Math.floor(p.lv/5)] || 'Đại Đế'}</b>
            <div class="bar"><div id="hp-fill" style="width:${p.hp/p.maxHp*100}%"></div></div>
            <div class="bar"><div id="rage-fill" style="width:${p.rage}%"></div></div>
            <div style="color:gold">Vàng: ${p.gold}</div>
        `;
    }
};

