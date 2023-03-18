import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  /**
   * prograss bar Length
   */
  @Input() progresLevel: string

  /**
   * prograss bar switching bool
   */

  @Input() showAllProgressBars: boolean
  /**
   * prograss bar types
   */

  @Input() singleColor: 'single' | 'striped' | 'striped-animated' | 'multi-color' | 'Multiple' = 'single'


  constructor() { }

  ngOnInit(): void {
  }

}
