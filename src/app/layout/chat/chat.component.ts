import { Component } from '@angular/core';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MessagesComponent } from "./messages/messages.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    imports: [SidenavComponent, MessagesComponent]
})
export class ChatComponent {

}
