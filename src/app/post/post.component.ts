import {Component, Input} from '@angular/core';
import {Message} from "../common/message";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() message!: Message;

}
