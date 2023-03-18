import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent implements OnInit {

  constructor() { }

  /**
  * option to set datas in the rows.
  */
  @Input() rowData: any

  /**
  * Option to set column datas.
  */
  @Input() columnDefs: any

  /**
  * Set height for view.
  */
  @Input() height: any

  /**
  * Set width for view.
  */
  @Input() width: any

  ngOnInit(): void {
  }

}
