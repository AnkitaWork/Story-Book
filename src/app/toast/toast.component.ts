import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService, ProgressAnimationType } from 'ngx-toastr';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

 /**
  * css class on toast switch the tost type
  * default: success
  */
  @Input() tostClasses: 'error' | 'info' | 'success' | 'warning' = 'success'
 /**
  * css class on toast title
  * default: toast-title
  */
  @Input() tostTitle: string
    /**
     * css class on toast message
     * default: toast-message
     */
  @Input() tostMessage: string
    /**
     * toast show close button
     * default: false
     */
  @Input() closeButton: boolean
    /**
     * show toast progress bar
     * default: false
     */
  @Input() progressBar: boolean
    /**
     * changes toast progress bar animation
     * default: decreasing
     */
  @Input() progressAnimation: 'decreasing' | 'increasing' = 'decreasing'
    /**
     * clicking on toast dismisses it
     * default: true
     */
  @Input() tapToDismiss: boolean
 /**
  * clicking on show button
  * default: true
  */
  @Input() showButtons: boolean


  /**
   * Optional click handler
   */
  @Output() myEvent: EventEmitter<any> = new EventEmitter();


  constructor(readonly toastr: ToastrService) { }

  ngOnInit(): void {
    if (!this.showButtons) {
      this.showToast()
      this.tostClasses = 'error'
      this.showToast()
      this.tostClasses = 'info'
      this.showToast()
      this.tostClasses = 'warning'
      this.showToast()
    }
  }
  /**
   * show Tost actions
   */
  showToast() {
    if( this.tostClasses === 'warning' ) {
      this.toastr.warning(this.tostMessage, this.tostTitle, {
        closeButton: this.closeButton,
        progressBar: this.progressBar,
        progressAnimation: this.progressAnimation,
        tapToDismiss: this.tapToDismiss
      })
      .onHidden
      .subscribe(() => this.myEvent.next('toast is destroyed'));
    } else if( this.tostClasses === 'error' ) {
      this.toastr.error(this.tostMessage, this.tostTitle, {
        closeButton: this.closeButton,
        progressBar: this.progressBar,
        progressAnimation: this.progressAnimation,
        tapToDismiss: this.tapToDismiss
      })
      .onHidden
      .subscribe(() => this.myEvent.next('toast is destroyed'));
    } else if( this.tostClasses === 'info' ) {
      this.toastr.info(this.tostMessage, this.tostTitle, {
        closeButton: this.closeButton,
        progressBar: this.progressBar,
        progressAnimation: this.progressAnimation,
        tapToDismiss: this.tapToDismiss
      })
      .onHidden
      .subscribe(() => this.myEvent.next('toast is destroyed'));
    } else {
      this.toastr.success(this.tostMessage, this.tostTitle, {
        closeButton: this.closeButton,
        progressBar: this.progressBar,
        progressAnimation: this.progressAnimation,
        tapToDismiss: this.tapToDismiss
      })
      .onHidden
      .subscribe(() => this.myEvent.next('toast is destroyed'));
    }
  }
}
