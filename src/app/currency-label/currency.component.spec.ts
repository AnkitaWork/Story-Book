import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import { NgxCurrencyModule } from 'ngx-currency';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyComponent ],
      imports: [ NgxCurrencyModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    component.value = '100'
    component.currency = 'INR'
    component.align = 'left'
    component.precision = 0
    component.minimum = 0
    component.maximum = 10000
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of value', () => {
    fixture.detectChanges()
    expect(component.value).toBe('100')
  });

  it('should correctly render the passed @Input value of input', () => {
    fixture.detectChanges()
    expect(component.input).toBeUndefined()
  });

  it('should correctly render the passed @Input value of currency', () => {
    fixture.detectChanges()
    expect(component.currency).toBe('INR')
  });

  it('should correctly render the passed @Input value of align', () => {
    fixture.detectChanges()
    expect(component.align).toBe('left')
  });

  it('should correctly render the passed @Input value of precision', () => {
    fixture.detectChanges()
    expect(component.precision).toBe(0)
  });

  it('should correctly render the passed @Input value of minimum', () => {
    fixture.detectChanges()
    expect(component.minimum).toBe(0)
  });

  it('should correctly render the passed @Input value of maximum', () => {
    fixture.detectChanges()
    expect(component.maximum).toBe(10000)
  });

});
