import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-content-view',
  templateUrl: './grid-content-view.component.html',
  styleUrls: ['./grid-content-view.component.scss']
})
export class GridContentViewComponent implements OnInit {

  constructor() { }

  /**
    * Title list to showing content grid.
    */
  @Input() titles: any

  /**
    * Option for showing imageview grid.
    * default: true
    */
  @Input() imageView: boolean

  /**
    * Image list to showing images grid.
    */
  @Input() images: any

  /**
    * Option to showing no.of rows.
    * default: 3
    */
  @Input() noOfRows: any

  /**
    * Option to set height for grid view.
    * Only for content grid view
    * default: 200
    */
  @Input() height: any

  ngOnInit(): void {
  }

}
