# 💬 Real-time Chat App using Angular and Go (WebSockets)

This project demonstrates a basic real-time chat application using Angular (frontend) and Golang (backend) via WebSockets.

---

## 🚀 Tech Stack

- ⚙️ **Backend:** Go (Golang) using `net/http` and `gorilla/websocket`
- 🌐 **Frontend:** Angular (v14+)
- 🔌 **Communication:** WebSockets

---

## 🛠️ Getting Started

Backend (Go)

**Requirements:** Go 1.18+

```bash
Install dependencies:
go get github.com/gorilla/websocket

Run the server:

 ```bash 
   cd api
   go run main.go

Frontend (Angular)
  Requirements: Node.js, Angular CLI

  Install and run the Angular app:

```bash
cd ui
npm install
ng serve
```

 📸 Preview
  The UI includes:

    🖊️ A text input box for entering messages.

    📥 A real-time message feed that updates instantly.

    🔄 WebSocket-based communication for sending and receiving messages.

    👥 Multiple users can chat simultaneously in real-time.

    🧼 Simple, clean layout — can be enhanced with styles or Angular Material.

<img width="1552" height="987" alt="Screenshot 2025-07-15 at 8 13 10 AM" src="https://github.com/user-attachments/assets/14aa1633-836e-4aba-ae7b-b8f1e99a61a8" />
<img width="1552" height="987" alt="Screenshot 2025-07-15 at 8 13 01 AM" src="https://github.com/user-attachments/assets/57059597-8f46-47ca-a8f7-b98611432518" />
