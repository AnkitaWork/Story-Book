import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit {

  /**
  * Controls the opened state of the sidebar.
  * default: false
  */
  @Input() opened: boolean

  /**
  * Whether clicking outside of the open sidebar will close it.
  * default: true
  */
  @Input() closeOnClickOutside: boolean

  /**
  * See the sliding "Modes" section.
  * push and over
  */
  @Input() mode: String

  /**
  * What side the sidebar should be docked to.
  * left, right, top & bottom
  * default: left
  */
  @Input() position: String

  /**
  * Content shows in sidebar.
  * Use html tags or string
  */
 @Input() content: any

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
