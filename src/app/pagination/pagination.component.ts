import { Component, OnInit , Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page: number;

/**
 * Pagination options.
 * Use ngx-bootstrap pagination.
 * See https://valor-software.com/ngx-bootstrap/#/pagination
 */
@Input() totalItems:number;

/**
 * Pagination options.
 * Use ngx-bootstrap pagination.
 * See https://valor-software.com/ngx-bootstrap/#/pagination
 */
@Input() itemsPerPage:number;


  /**
   * Optional click handler
   */
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.pageChanged;
  }
  pageChanged(event: any): void {
    this.page = event.page;
  }
}
