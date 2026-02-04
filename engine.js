const Game = {
    init() {
        this.cvs = document.getElementById('gameCanvas');
        this.ctx = this.cvs.getContext('2d');
        this.cvs.width = window.innerWidth;
        this.cvs.height = window.innerHeight;
        
        this.world = new World();
        this.p = { x: 5000, y: 5000, hp: 300, maxHp: 300, rage: 0, gold: 0, lv: 1, sect: null, dmg: 50 };
        this.mobs = []; this.cam = { x: 5000, y: 5000 };

        this.renderSects();
    },

    renderSects() {
        const root = document.getElementById('sect-picker');
        CONFIG.sects.forEach(s => {
            const d = document.createElement('div'); d.className = 'sect-card';
            d.innerText = s.n; d.onclick = () => this.start(s);
            root.appendChild(d);
        });
    },

    start(s) {
        this.p.sect = s;
        document.getElementById('lobby').style.display = 'none';
        document.getElementById('hud').style.display = 'block';
        Input.init(); Skills.render();
        for(let i=0; i<30; i++) this.spawnMob();
        this.loop();
    },

    spawnMob() { this.mobs.push(new Stickman(this.p.x + (Math.random()-0.5)*2000, this.p.y + (Math.random()-0.5)*2000, '#f44')); },

    attack() {
        this.mobs.forEach(m => {
            if(Math.hypot(m.x - this.p.x, m.y - this.p.y) < 150) {
                m.hp -= this.p.dmg; VFX.spawn(m.x, m.y, '#f00');
                if(m.hp <= 0) { this.p.gold += 50; this.p.rage = Math.min(100, this.p.rage + 10); this.mobs.splice(this.mobs.indexOf(m),1); this.spawnMob(); }
            }
        });
    },

    loop() {
        this.update(); this.draw();
        requestAnimationFrame(() => this.loop());
    },

    update() {
        this.p.x += Input.joy.x * 6; this.p.y += Input.joy.y * 6;
        this.cam.x += (this.p.x - this.cam.x) * 0.1;
        this.cam.y += (this.p.y - this.cam.y) * 0.1;
        Status.update(this.p);
    },

    draw() {
        this.ctx.fillStyle = '#050a05'; this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
        this.ctx.save();
        this.ctx.translate(this.cvs.width/2 - this.cam.x, this.cvs.height/2 - this.cam.y);
        this.world.draw(this.ctx);
        this.mobs.forEach(m => m.draw(this.ctx));
        VFX.updateAndDraw(this.ctx);
        this.ctx.restore();
        
        const playerDraw = new Stickman(this.cvs.width/2, this.cvs.height/2, this.p.sect.c);
        playerDraw.draw(this.ctx, Input.joy.x * 0.3, 2);
    }
};
Game.init();

