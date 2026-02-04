const Quests = {
    list: [
        { id: 1, title: "Diệt trừ tiểu yêu", target: 5, current: 0, reward: 500, done: false },
        { id: 2, title: "Săn lùng Ma Vương", target: 1, current: 0, reward: 5000, done: false }
    ],
    update(type, amount = 1) {
        this.list.forEach(q => {
            if(!q.done) {
                q.current += amount;
                if(q.current >= q.target) {
                    q.done = true;
                    Game.p.gold += q.reward;
                    Logger.log(`NHIỆM VỤ HOÀN THÀNH: ${q.title} (+${q.reward}V)`);
                }
            }
        });
    },
    render() {
        let html = '<div class="panel" style="right:10px; top:150px; width:180px; font-size:12px">';
        html += '<b style="color:var(--gold)">NHIỆM VỤ</b>';
        this.list.forEach(q => {
            if(!q.done) html += `<div>- ${q.title}: ${q.current}/${q.target}</div>`;
        });
        return html + '</div>';
    }
};

