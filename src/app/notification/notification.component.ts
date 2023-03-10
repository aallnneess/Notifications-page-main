import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  @Input() notifications!: number;

  @Output() markAllAsRead = new EventEmitter();

  mark() {
    this.markAllAsRead.emit();
  }
}
