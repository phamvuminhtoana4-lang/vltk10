const Input = {
    joy: { x: 0, y: 0, active: false },
    init() {
        const zone = document.getElementById('joystick');
        zone.innerHTML = '<div id="knob"></div>';
        const knob = document.getElementById('knob');
        
        zone.ontouchstart = (e) => { this.joy.active = true; };
        window.ontouchmove = (e) => {
            if(!this.joy.active) return;
            const t = e.touches[0];
            const r = zone.getBoundingClientRect();
            const dx = t.clientX - (r.left + 60), dy = t.clientY - (r.top + 60);
            const dist = Math.min(45, Math.hypot(dx, dy));
            const angle = Math.atan2(dy, dx);
            this.joy.x = Math.cos(angle) * (dist/45);
            this.joy.y = Math.sin(angle) * (dist/45);
            knob.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`;
        };
        window.ontouchend = () => { this.joy.active = false; this.joy.x = 0; this.joy.y = 0; knob.style.transform = ''; };
    }
};

