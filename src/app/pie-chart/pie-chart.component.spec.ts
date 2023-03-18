import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartComponent ],
      imports: [NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    component.chart = {width: 380, type: 'pie'}
    component.series =  [44, 55, 13, 43, 22]
    component.labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
    component.responsive = [{breakpoint: 480,options: {chart: { width: 200},legend: {position: 'bottom'}}}]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of chart', () => {
    fixture.detectChanges()
    expect(component.chart.width).toBe(380)
  });

  it('should correctly render the passed @Input value of series', () => {
    fixture.detectChanges()
    expect(component.series).toEqual([44, 55, 13, 43, 22])
  });

  it('should correctly render the passed @Input value of labels', () => {
    fixture.detectChanges()
    expect(component.labels).toEqual(['Team A', 'Team B', 'Team C', 'Team D', 'Team E'])
  });

});
