import {Component, OnInit} from '@angular/core';
import {Message} from "./common/message";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Notifications-page-main';

  messages: Message[] = [];

  private notificationsSubject$ = new BehaviorSubject<number>(0);
  notifications$ = this.notificationsSubject$.asObservable();

  ngOnInit(): void {

    this.createMessages();
    this.checkNotifications();

  }

  createMessages() {

    let message1 = new Message('Mark Webber',
      'reacted to your recent post',
      '1m ago',
      'assets/images/avatar-mark-webber.webp',
      true,
      'My first tournament today!');

    this.messages.push(message1);

    let message2 = new Message('Angela Gray',
      'followed you',
      '5m ago',
      'assets/images/avatar-angela-gray.webp',
      true,
      '');

    this.messages.push(message2);

    let message3 = new Message('Jacob Thompson',
      'has joined your group',
      '1 day ago',
      'assets/images/avatar-jacob-thompson.webp',
      true,
      'Chess Club');
    this.messages.push(message3);

    let message4 = new Message('Rizky Hasanuddin',
      'sent you a private message',
      '5 day ago',
      'assets/images/avatar-rizky-hasanuddin.webp',
      false,
      '',
      '',
      'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and Im already having lots of fun and improving my game.');

    this.messages.push(message4);

    let message5 = new Message('Kimberly Smith',
      'commented on your picture',
      '1 week ago',
      'assets/images/avatar-kimberly-smith.webp',
      false,
      '',
      '',
      '',
      'assets/images/image-chess.webp');

    this.messages.push(message5);

    let message6 = new Message('Nathan Peterson',
      'reacted to your recent post',
      '2 weeks ago',
      'assets/images/avatar-nathan-peterson.webp',
      false,
      '5 end-game strategies to increase your win rate');

    this.messages.push(message6);

    let message7 = new Message('Anna Kim',
      'left the group',
      '1m ago',
      'assets/images/avatar-anna-kim.webp',
      false,'','Chess Club');

    this.messages.push(message7);


  }

  checkNotifications() {
    let count = 0;
    this.messages.forEach(message => {

      if (message.newMessage) count++;

    });

    this.notificationsSubject$.next(count);
  }


  markAllAsRead() {
    this.messages.forEach(message => {

      message.newMessage = false;

    });

    this.checkNotifications();
  }
}
