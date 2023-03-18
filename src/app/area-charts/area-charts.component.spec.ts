import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaChartsComponent } from './area-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('AreaChartsComponent', () => {
  let component: AreaChartsComponent;
  let fixture: ComponentFixture<AreaChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaChartsComponent ],
      imports: [NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaChartsComponent)
    component = fixture.componentInstance
    component.chart = {width: 500, type: 'area', zoom: {enabled: false}}
    component.dataLabels = {enabled: false}
    component.stroke =  {curve: 'straight'}
    component.yaxis = {opposite: true}
    component.labels = {}
    component.legend = {horizontalAlign: 'left'}
    component.series = [{name: 'STOCK ABC',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]}]
    component.title = {text: 'Fundamental Analysis of Stocks',align: 'left'}
    component.subtitle = { text: 'Price Movements',align: 'left'}
    component.xaxis = { type: 'datetime', categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z',
                      '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z', '2018-09-19T07:30:00.000Z', '2018-09-19T08:30:00.000Z']}
    component.tooltip = {}
    fixture.detectChanges()
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
    expect(component.chart.width).toBe(500)
  });

  it('should correctly render the passed @Input value dataLabels', () => {
    fixture.detectChanges()
    expect(component.dataLabels.enabled).toBe(false)
  });

  it('should correctly render the passed @Input value stroke', () => {
    fixture.detectChanges()
    expect(component.stroke.curve).toBe('straight')
  });

  it('should correctly render the passed @Input value yaxis', () => {
    fixture.detectChanges()
    expect(component.yaxis.opposite).toBe(true)
  });

  it('should correctly render the passed @Input value title', () => {
    fixture.detectChanges()
    expect(component.title.text).toBe('Fundamental Analysis of Stocks')
  });

  it('should correctly render the passed @Input value yaxis', () => {
    fixture.detectChanges()
    expect(component.subtitle.text).toBe('Price Movements')
  });

  it('should correctly render the passed @Input value yaxis', () => {
    fixture.detectChanges()
    expect(component.xaxis.type).toBe('datetime')
  });
});
