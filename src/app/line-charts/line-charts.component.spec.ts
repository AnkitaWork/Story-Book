import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartsComponent } from './line-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('LineChartsComponent', () => {
  let component: LineChartsComponent;
  let fixture: ComponentFixture<LineChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartsComponent ],
      imports: [NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartsComponent)
    component = fixture.componentInstance
    component.chart =  {width: 500, type: 'line', zoom: {enabled: false}}
    component.stroke = {curve: 'straight'}
    component.subtitle = { text: 'Price Movements',align: 'left'}
    component.title = {text: 'Fundamental Analysis of Stocks',align: 'left'}
    component.yaxis = {}
    component.legend = {}
    component.labels = {}
    component.series =  [{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]}]
    component.dataLabels = {enabled: false}
    component.xaxis =  {categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']}
    fixture.detectChanges()
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
    expect(component.chart.width).toBe(500)
  });

  it('should correctly render the passed @Input value of stroke', () => {
    fixture.detectChanges()
    expect(component.stroke.curve).toBe('straight')
  });

  it('should correctly render the passed @Input value of subtitle', () => {
    fixture.detectChanges()
    expect(component.subtitle.text).toBe('Price Movements')
  });

  it('should correctly render the passed @Input value of title', () => {
    fixture.detectChanges()
    expect(component.title.text).toBe('Fundamental Analysis of Stocks')
  });

  it('should correctly render the passed @Input value of dataLabels', () => {
    fixture.detectChanges()
    expect(component.dataLabels.enabled).toBe(false)
  });

  it('should correctly render the passed @Input value of dataLabels', () => {
    fixture.detectChanges()
    expect(component.xaxis.categories).toEqual(['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'])
  });

  it('should correctly render the passed @Input value of series', () => {
    fixture.detectChanges()
    expect(component.series).toEqual([{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]}])
  });

});
