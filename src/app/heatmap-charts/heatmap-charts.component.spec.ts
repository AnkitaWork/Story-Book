import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapChartsComponent } from './heatmap-charts.component';

describe('HeatmapChartsComponent', () => {
  let component: HeatmapChartsComponent;
  let fixture: ComponentFixture<HeatmapChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
