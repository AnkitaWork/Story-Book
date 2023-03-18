import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedChartsComponent } from './mixed-charts.component';

describe('MixedChartsComponent', () => {
  let component: MixedChartsComponent;
  let fixture: ComponentFixture<MixedChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
