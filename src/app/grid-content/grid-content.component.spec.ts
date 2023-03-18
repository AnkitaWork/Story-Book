import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridContentComponent } from './grid-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

describe('GridContentComponent', () => {
  let component: GridContentComponent;
  let fixture: ComponentFixture<GridContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridContentComponent ],
      imports: [BrowserModule, AgGridModule.withComponents([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridContentComponent);
    component = fixture.componentInstance;
    component.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    component.columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true },
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ]
    component.height = 500
    component.width = 500
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of rowData', () => {
    fixture.detectChanges()
    expect(component.rowData).toEqual([
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
      ])
  });

  it('should correctly render the passed @Input value of columnDefs', () => {
    fixture.detectChanges()
    expect(component.columnDefs).toEqual([
      {headerName: 'Make', field: 'make', sortable: true, filter: true },
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ])
  });

  it('should correctly render the passed @Input value of height', () => {
    fixture.detectChanges()
    expect(component.height).toBe(500)
  });

  it('should correctly render the passed @Input value of width', () => {
    fixture.detectChanges()
    expect(component.width).toBe(500)
  });

});
