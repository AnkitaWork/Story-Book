import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContentViewComponent } from './grid-content-view.component';

describe('GridContentViewComponent', () => {
  let component: GridContentViewComponent;
  let fixture: ComponentFixture<GridContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContentViewComponent);
    component = fixture.componentInstance;
    component.titles = [
        "One",
        "Two",
        "Three"
      ]
    component.imageView = false
    component.images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU"
      ]
    component.noOfRows = 3
    component.height = 200
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of titles', () => {
    fixture.detectChanges()
    expect(component.titles).toEqual([
      "One",
      "Two",
      "Three"
    ])
  });

  it('should correctly render the passed @Input value of imageView', () => {
    fixture.detectChanges()
    expect(component.imageView).toBe(false)
  });

  it('should correctly render the passed @Input value of images', () => {
    fixture.detectChanges()
    expect(component.images).toEqual([
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKhIHcJvjvEhl3gpaHKfdINhgCBQOo1ckZEA&usqp=CAU"
    ])
  });

  it('should correctly render the passed @Input value of height', () => {
    fixture.detectChanges()
    expect(component.height).toBe(200)
  });

  it('should correctly render the passed @Input value of noOfRows', () => {
    fixture.detectChanges()
    expect(component.noOfRows).toBe(3)
  });

});
