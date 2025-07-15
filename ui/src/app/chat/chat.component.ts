import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  username = '';
  message = '';
  messages: any[] = [];

  constructor(private wsService: WebsocketService) {}

  ngOnInit() {
    this.wsService.connect().subscribe((msg) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    if (this.username && this.message) {
      this.wsService.send({
        username: this.username,
        content: this.message,
      });
      this.message = '';
    }
  }
}
