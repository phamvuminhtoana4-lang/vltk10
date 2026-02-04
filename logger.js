/**
 * LOGGER MODULE - Hệ thống quản lý thông báo thời gian thực
 */
const Logger = {
    messages: [],
    maxMessages: 6,
    
    // Hàm gửi thông báo mới
    log(text, color = "#ffffff") {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.messages.unshift({ text: `[${timestamp}] ${text}`, color });
        
        // Giới hạn số lượng tin nhắn hiển thị để tránh tràn màn hình
        if (this.messages.length > this.maxMessages) {
            this.messages.pop();
        }
        
        this.render();
        console.log(`%c GameLog: ${text}`, `color: ${color}; font-weight: bold;`);
    },

    // Hiển thị ra giao diện HUD
    render() {
        const logContainer = document.getElementById('msg-log');
        if (!logContainer) return;

        // Định dạng lại style cho container nếu chưa có
        logContainer.style.position = 'absolute';
        logContainer.style.bottom = '20px';
        logContainer.style.left = '20px';
        logContainer.style.pointerEvents = 'none';
        logContainer.style.zIndex = '100';
        logContainer.style.fontFamily = 'monospace';
        logContainer.style.textShadow = '1px 1px 2px #000';

        // Tạo nội dung HTML
        logContainer.innerHTML = this.messages.map(m => 
            `<div style="color: ${m.color}; margin-top: 4px; animation: fadeIn 0.3s ease;">
                ${m.text}
            </div>`
        ).join('');
    },

    // Các hàm phím tắt nhanh cho các sự kiện đặc biệt
    critical(text) { this.log(`💥 CHÍ MẠNG: ${text}`, "#ff3300"); },
    system(text) { this.log(`⚙️ HỆ THỐNG: ${text}`, "#00f2ff"); },
    levelUp(lv) { this.log(`✨ CHÚC MỪNG: Bạn đã đột phá lên Cấp ${lv}!`, "#ffd700"); },
    gold(amount) { this.log(`💰 NHẬN VÀNG: +${amount}`, "#ffd700"); }
};

// Thêm hiệu ứng fadeIn vào CSS qua JS
const logStyle = document.createElement('style');
logStyle.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateX(-10px); }
        to { opacity: 1; transform: translateX(0); }
    }
`;
document.head.appendChild(logStyle);

