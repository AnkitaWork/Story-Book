import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast.component';
import { ToastrModule } from 'ngx-toastr';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastComponent ],
      imports: [ToastrModule.forRoot(),BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent)
    component = fixture.componentInstance
    component.tostTitle = 'Toast Title'
    component.tostMessage = 'Don’t stop when you’re tired. Stop when you’re done.'
    component.closeButton = false
    component.progressBar = true
    component.tapToDismiss = true
    component.showButtons = false
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of tostTitle', () => {
    fixture.detectChanges()
    expect(component.tostTitle).toBe('Toast Title')
  });

  it('should correctly render the passed @Input value of tostMessage', () => {
    fixture.detectChanges()
    expect(component.tostMessage).toEqual('Don’t stop when you’re tired. Stop when you’re done.')
  });

  it('should correctly render the passed @Input value of closeButton', () => {
    fixture.detectChanges()
    expect(component.closeButton).toBe(false)
  });

  it('should correctly render the passed @Input value of progressBar', () => {
    fixture.detectChanges()
    expect(component.progressBar).toBe(true)
  });

  it('should correctly render the passed @Input value of tapToDismiss', () => {
    fixture.detectChanges()
    expect(component.tapToDismiss).toBe(true)
  });

  it('should correctly render the passed @Input value of showButtons', () => {
    fixture.detectChanges()
    expect(component.showButtons).toBe(false)
  });
});
