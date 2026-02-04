const BossSystem = {
    current: null,
    spawn(px, py) {
        this.current = new Stickman(px + 1000, py, '#f0f');
        this.current.maxHp = 5000; this.current.hp = 5000;
        document.getElementById('boss-ui').innerHTML = `
            <div style="color:magenta; text-align:center">MA VƯƠNG</div>
            <div class="bar" style="width:60vw; margin:auto"><div id="boss-hp" style="background:magenta; height:100%"></div></div>
        `;
        document.getElementById('boss-ui').style.display = 'block';
    }
};

