const Shop = {
    open() {
        let html = '<div id="shop-p" class="panel" style="top:50%; left:50%; transform:translate(-50%,-50%); width:300px">';
        CONFIG.weapons.forEach((w, i) => {
            html += `<div style="padding:10px; border-bottom:1px solid #444">
                ${w.n} (+${w.d}) - <button onclick="Game.buy(${i})">${w.p}V</button>
            </div>`;
        });
        html += '<button onclick="this.parentElement.remove()">ĐÓNG</button></div>';
        document.body.insertAdjacentHTML('beforeend', html);
    }
};

