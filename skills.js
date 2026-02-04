const Skills = {
    render() {
        const area = document.getElementById('action-btns');
        area.className = 'skills-grid';
        area.innerHTML = `
            <button class="btn-s" onclick="Game.castUlt()">NỘ</button>
            <button class="btn-s" onclick="Game.dash()">LƯỚT</button>
            <button class="btn-s atk" onclick="Game.attack()">ĐÁNH</button>
        `;
    }
};
// Style bổ trợ cho skills
const style = document.createElement('style');
style.innerHTML = `.skills-grid { position:absolute; bottom:30px; right:30px; pointer-events:auto; display:flex; gap:10px; }
.btn-s { width:70px; height:70px; border-radius:50%; background:rgba(0,0,0,0.8); color:#fff; border:2px solid gold; font-weight:bold; }
.atk { width:100px; height:100px; background:red; }`;
document.head.appendChild(style);

