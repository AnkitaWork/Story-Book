import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxComponent } from './select-box.component';
import { By } from '@angular/platform-browser';

describe('SelectBoxComponent', () => {
  let component: SelectBoxComponent;
  let fixture: ComponentFixture<SelectBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxComponent);
    component = fixture.componentInstance;
    spyOn(component.onChange, 'emit');
    component.options = ['Alabama', 'Alaska', 'Arizona']
    component.placeholder = 'Select'
    component.disabled = false
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of options', () => {
    fixture.detectChanges()
    expect(component.options).toEqual(['Alabama', 'Alaska', 'Arizona'])
  });

  it('should correctly render the passed @Input value of placeholder', () => {
    fixture.detectChanges()
    expect(component.placeholder).toBe('Select')
  });

  it('should correctly render the passed @Input value of disabled', () => {
    fixture.detectChanges()
    expect(component.disabled).toBe(false)
  });

  describe('onChange', () => {
    it('should emit selected value from selectbox', async () => {
  
      fixture.detectChanges();
      let select: HTMLSelectElement = fixture.debugElement.query(By.css('.custom-select')).nativeElement;
      select.value = select.options[2].value;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let text = select.options[select.selectedIndex].label;
        expect(text).toBe('Alaska');
      });
    });
  });

});
