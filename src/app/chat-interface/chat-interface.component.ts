import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { DemoAdapter } from './demo-adapter';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent implements OnInit {

  /**
   * Optional click handler
   */
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  /**
   * user id number
   */
  @Input() userId: number;

  /**
   * history Enable and desable handler
   */
  @Input() historyEnabled: boolean

  /**
   * history Page Size handler
   */
  @Input() historyPageSize: number

  /**
   * hide Friends List handler
   */

  @Input() hideFriendsList: boolean

  public adapter: ChatAdapter = new DemoAdapter();

  ngOnInit(): void {
  }

  public messageSeen(event: any)
  {
    this.myEvent.next(event)
  }

}
