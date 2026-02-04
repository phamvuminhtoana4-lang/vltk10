const Inventory = {
    items: [],
    add(itemName) {
        this.items.push(itemName);
        Logger.log(`Đã nhặt: ${itemName}`);
    },
    use(index) {
        const item = this.items[index];
        if(item === 'Đại Hoàn Đan') Game.p.hp = Game.p.maxHp;
        this.items.splice(index, 1);
    }
};

