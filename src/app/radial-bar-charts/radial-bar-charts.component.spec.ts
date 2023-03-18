import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialBarChartsComponent } from './radial-bar-charts.component';

describe('RadialBarChartsComponent', () => {
  let component: RadialBarChartsComponent;
  let fixture: ComponentFixture<RadialBarChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialBarChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
