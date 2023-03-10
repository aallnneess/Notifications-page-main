export class Message {


  constructor(name: string, reason: string, sendTime: string, imageUrl: string, newMessage: boolean, topic: string = '', group: string = '', privateMessage: string = '', commentedPictureUrl: string = '') {
    this.name = name;
    this.reason = reason;
    this.sendTime = sendTime;
    this.imageUrl = imageUrl;
    this.newMessage = newMessage;
    this.topic = topic;
    this.group = group;
    this.privateMessage = privateMessage;
    this.commentedPictureUrl = commentedPictureUrl;
  }

  name!: string;
  reason!: string;
  sendTime!: string;
  imageUrl!: string;
  newMessage!: boolean;
  topic!: string;
  group!: string;
  privateMessage!: string;
  commentedPictureUrl!: string;

}
