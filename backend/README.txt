FATIMA TRUST – DEPLOYMENT STEPS (WINDOWS SERVER)

REQUIREMENTS:
- Windows Server
- Node.js (LTS)
- PM2 (npm install pm2 -g)

--------------------------------
BACKEND SETUP
--------------------------------
1. Go to backend folder
2. Run: npm install
3. Create .env file using .env.example
4. Run: pm2 start server.js --name fatima-trust
5. Save: pm2 save

--------------------------------
FRONTEND SETUP
--------------------------------
- Use frontend/dist as static root
- Can be served via IIS / Nginx
- Or already served via backend (Express)

--------------------------------
PORT
--------------------------------
Backend runs on port 5000
Frontend served from backend root

--------------------------------
ADMIN
--------------------------------
Admin password set in .env





# PM2 install (agar pehli baar)
npm install pm2 -g

# Server start
pm2 start server.js --name fatima-trust

# Restart server
pm2 restart fatima-trust

# Stop server
pm2 stop fatima-trust

# Logs check
pm2 logs fatima-trust

# List running processes
pm2 list
