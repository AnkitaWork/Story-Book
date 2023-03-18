import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BubbleChartsComponent } from './bubble-charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('BubbleChartsComponent', () => {
  let component: BubbleChartsComponent;
  let fixture: ComponentFixture<BubbleChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubbleChartsComponent ],
      imports: [NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleChartsComponent);
    component = fixture.componentInstance;
    component.series = [{name: 'Bubble1', data: [1, 2, 3, 4, 5]},
    {name: 'Bubble4', data:[1, 2, 3, 4, 5]},
    {name: 'Bubble2', data: [1, 2, 3, 4, 5]},
    {name: 'Bubble3', data: [1, 2, 3, 4, 5]}]
    component.chart =  {type: 'bubble', height: 350}
    component.dataLabels = {enabled: false}
    component.xaxis = {tickAmount: 12, type: 'category'}
    component.fill = {opacity: 0.8}
    component.yaxis = {max: 70}
    component.title = {text: 'Simple Bubble Chart'}
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
    expect(component.chart.height).toBe(350)
  });

  it('should correctly render the passed @Input value of dataLabels', () => {
    fixture.detectChanges()
    expect(component.dataLabels.enabled).toBe(false)
  });

  it('should correctly render the passed @Input value of xaxis', () => {
    fixture.detectChanges()
    expect(component.xaxis.tickAmount).toBe(12)
  });

  it('should correctly render the passed @Input value of xaxis', () => {
    fixture.detectChanges()
    expect(component.fill.opacity).toBe(0.8)
  });

  it('should correctly render the passed @Input value of yaxis', () => {
    fixture.detectChanges()
    expect(component.yaxis.max).toBe(70)
  });

  it('should correctly render the passed @Input value of title', () => {
    fixture.detectChanges()
    expect(component.title.text).toBe('Simple Bubble Chart')
  });

});
