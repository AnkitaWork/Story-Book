import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  
 
/**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
  @Input() minDate: Date;
  
 /**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
 @Input() maxDate: Date; 

 /**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
 @Input() isDisabled: boolean; 
 /**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
@Input()  showWeekNumbers: boolean; 

 /**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
@Input()  dateInputFormat: any; 

 /**
 * Date picker options.
 * Use ngx-bootstrap date-picker.
 * See https://valor-software.com/ngx-bootstrap/#/datepicker#min-max
 */
 
@Input() colorTheme: 'theme-blue' | 'theme-green' | 'theme-red' | 'theme-dark-blue' | 'theme-orange' = 'theme-green';

@Input()  pickertype: any; 


  constructor() { }
  ngOnInit(): void {
    
  }
  

}
