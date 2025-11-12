# Deploy LAN Chat lên Replit

## 🚀 Quick Deploy

1. **Import project từ GitHub:**
   - Đăng ký tài khoản tại [replit.com](https://replit.com)
   - Click "Create" → "Import from GitHub"
   - Paste URL: `https://github.com/YOUR_USERNAME/LanLocalChat`

2. **Cấu hình Environment Variables:**
   - Trong Replit dashboard, click "Secrets" (lock icon)
   - Copy nội dung từ file `.env.replit` và paste vào

3. **Chạy project:**
   - Replit sẽ tự động chạy `npm start`
   - Hoặc click nút "Run"

4. **Truy cập:**
   - URL sẽ có dạng: `https://your-project-name.your-username.repl.co`

## ⚙️ Cấu hình chi tiết

### Environment Variables cần thiết:
```
SERVER_PORT=13050
PUBLIC_PORT=5173
HOST=0.0.0.0
PUBLIC_HOST=0.0.0.0
VITE_SERVER_PORT=13050
VITE_MESSAGE_SALT=your_secret_key_here
MAX_FILE_SIZE=50
```

### Files đã được config:
- `.replit` - Cấu hình run command
- `keep-alive.js` - Script tránh server sleep
- `package.json` - Scripts đã được update

## 🔧 Troubleshooting

### Nếu server không start:
1. Check console logs trong Replit
2. Đảm bảo tất cả environment variables đã set
3. Kiểm tra port 13050 có bị conflict không

### Nếu WebSocket không hoạt động:
1. Đảm bảo `HOST=0.0.0.0` trong env vars
2. Check firewall settings trong Replit

### Nếu file upload không hoạt động:
1. Kiểm tra `MAX_FILE_SIZE` không quá lớn (max 50MB cho free tier)
2. Đảm bảo thư mục `server/uploads/` tồn tại

## 📊 Resource Limits (Free Tier)
- RAM: 1GB
- Storage: 10GB
- Bandwidth: Limited
- Concurrent users: 5-10 users

## 🔄 Keep Server Alive
Project đã có keep-alive script tự động ping server mỗi 5 phút để tránh bị sleep.

## 🎯 Performance Tips
- Giảm `MAX_FILE_SIZE` xuống 50MB
- Giảm `HISTORY_RETENTION` xuống 1 ngày
- Monitor RAM usage thường xuyên

---
**Happy deploying! 🚀**