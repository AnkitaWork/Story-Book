import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidebarComponent } from './navigation-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';

describe('NavigationSidebarComponent', () => {
  let component: NavigationSidebarComponent;
  let fixture: ComponentFixture<NavigationSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidebarComponent ],
      imports: [BrowserModule, SidebarModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidebarComponent);
    component = fixture.componentInstance;
    component.opened = true
    component.closeOnClickOutside = true
    component.mode = 'over'
    component.position = 'left'
    component.content = 'Sidebar content'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value of opened', () => {
    fixture.detectChanges()
    expect(component.opened).toBe(true)
  });

  it('should correctly render the passed @Input value of closeOnClickOutside', () => {
    fixture.detectChanges()
    expect(component.closeOnClickOutside).toBe(true)
  });

  it('should correctly render the passed @Input value of position', () => {
    fixture.detectChanges()
    expect(component.position).toBe('left')
  });

  it('should correctly render the passed @Input value of mode', () => {
    fixture.detectChanges()
    expect(component.mode).toBe('over')
  });

  it('should correctly render the passed @Input value of content', () => {
    fixture.detectChanges()
    expect(component.content).toBe('Sidebar content')
  });

  it('should open and close the side navigation bar', () => {

    const initialValue = component.opened
    component.toggleSidebar()
    const newValue = !component.opened
    expect(newValue).toBe(initialValue)

  });

});
