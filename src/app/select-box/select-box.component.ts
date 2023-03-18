import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  /**
   * Options to shows in the dropdown.
   */
  @Input() options: any

  /**
   * Placeholder for select input.
   * default: Select
   */
  @Input() placeholder: string

  /**
   * Disable dropdown view.
   * default: false
   */
  @Input() disabled: boolean

  /**
   * Returns selected value from dropdown
   */
  @Output() onChange = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

}
