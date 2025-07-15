import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket!: WebSocket;
  private subject = new Subject<any>();

  connect(): Observable<any> {
    this.socket = new WebSocket('ws://localhost:8080/ws');

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.subject.next(message);
    };

    return this.subject.asObservable();
  }

  send(data: any) {
    this.socket.send(JSON.stringify(data));
  }
}
