💬 Real-time Chat App using Angular and Go (WebSockets)

This project demonstrates a basic real-time chat application using Angular (frontend) and Golang (backend) via WebSockets.

🚀 Tech Stack
  ⚙️ Backend: Go (Golang) using net/http and gorilla/websocket
  🌐 Frontend: Angular (v14+)
  🔌 Communication: WebSockets

📁 Project Structure

  small-fun-project/
  ├── backend/api       # Go WebSocket server
  └── frontend/ui       # Angular chat UI

🛠️ Getting Started

   1. Backend (Go)
      Requirements: Go 1.18+

   Install dependencies:
      go get github.com/gorilla/websocket
     
   Run the server:
     cd api
     go run main.go

  2. Frontend (Angular)
     Requirements: Node.js,Angular CLI

   Run the Angular app:
     cd ui
     npm install
     ng serve

📸 Preview
  Simple UI with:
    A textbox for message input.
    A real-time feed showing all messages.
    Messages pushed and received via WebSockets.  

<img width="1552" height="987" alt="Screenshot 2025-07-15 at 8 13 10 AM" src="https://github.com/user-attachments/assets/14aa1633-836e-4aba-ae7b-b8f1e99a61a8" />
<img width="1552" height="987" alt="Screenshot 2025-07-15 at 8 13 01 AM" src="https://github.com/user-attachments/assets/57059597-8f46-47ca-a8f7-b98611432518" />
