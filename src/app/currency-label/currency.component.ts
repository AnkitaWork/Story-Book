import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  /**
    * Option to showing value in label.
    */
  @Input() value: String

  /**
    * Option to showing input or labe.
    */
   @Input() input: boolean

  /**
    * Currency code for label.
    * Currency symbol for input field
    * default: INR for label and ₹ for input field
    */
  @Input() currency: String

  /**
    * Text alignment in input.
    * default: left
    */
  @Input() align: String

  /**
    * Number of decimal places.
    * default: 0
    */
  @Input() precision: any

  /**
    * The minimum value.
    * default: 0
    */
   @Input() minimum: any

   /**
    * The maximum value.
    * default: 10000
    */
   @Input() maximum: any

  ngOnInit(): void {
  }

}
