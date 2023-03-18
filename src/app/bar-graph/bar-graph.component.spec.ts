import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphComponent } from './bar-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarGraphComponent ],
      imports: [NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    component.chart = {type: 'bar', height: 350}
    component.series = [{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]},
    {name: 'Revenue',data: [76, 85, 101, 98, 87, 105, 91, 114, 94]},{name: 'Free Cash Flow',data: [35, 41, 36, 26, 45, 48, 52, 53, 41]}]
    component.plotOptions = {bar: {horizontal: false,columnWidth: '55%',endingShape: 'rounded'}}
    component.dataLabels = {enabled: false}
    component.xaxis = {categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']}
    component.fill = {opacity: 1}
    component.yaxis = { title: {text: '$ (thousands)'}}
    component.stroke = {show: true,width: 2, colors: ['transparent']}
    component.subtitle = { text: 'Price Movements',align: 'left'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value chart', () => {
    fixture.detectChanges()
    expect(component.chart.height).toBe(350)
  });

  it('should correctly render the passed @Input value plotOptions', () => {
    fixture.detectChanges()
    expect(component.plotOptions.bar.endingShape).toBe('rounded')
  });

  it('should correctly render the passed @Input value dataLabels', () => {
    fixture.detectChanges()
    expect(component.dataLabels.enabled).toBe(false)
  });

  it('should correctly render the passed @Input value xaxis', () => {
    fixture.detectChanges()
    expect(component.xaxis.categories).toEqual(['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'])
  });

  it('should correctly render the passed @Input value fill', () => {
    fixture.detectChanges()
    expect(component.fill.opacity).toBe(1)
  });

  it('should correctly render the passed @Input value yaxis', () => {
    fixture.detectChanges()
    expect(component.yaxis.title.text).toBe('$ (thousands)')
  });

  it('should correctly render the passed @Input value fill', () => {
    fixture.detectChanges()
    expect(component.stroke.show).toBe(true)
  });

  it('should correctly render the passed @Input value subtitle', () => {
    fixture.detectChanges()
    expect(component.subtitle.align).toBe('left')
  });

});
