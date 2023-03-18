import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatInterfaceComponent } from './chat-interface.component';
import { DemoAdapter } from './demo-adapter';
import { NgChatModule } from 'ng-chat';

describe('ChatInterfaceComponent', () => {
  let component: ChatInterfaceComponent;
  let fixture: ComponentFixture<ChatInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgChatModule ],
      declarations: [ ChatInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInterfaceComponent)
    component = fixture.componentInstance
    component.userId = 999
    component.historyEnabled = true
    component.historyPageSize = 4
    component.hideFriendsList = false
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method messageSeen() is working ', () => {
    component.messageSeen('test');
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value userId', () => {
    component.adapter = new DemoAdapter()
    fixture.detectChanges()
    expect(component.userId).toBe(999);
  });

  it('should correctly render the passed @Input value historyEnabled', () => {
    component.adapter = new DemoAdapter()
    fixture.detectChanges()
    expect(component.historyEnabled).toBe(true);
  });

  it('should correctly render the passed @Input value historyPageSize', () => {
    component.adapter = new DemoAdapter()
    fixture.detectChanges()
    expect(component.historyPageSize).toBe(4);
  });

  it('should correctly render the passed @Input value hideFriendsList', () => {
    component.adapter = new DemoAdapter()
    fixture.detectChanges()
    expect(component.hideFriendsList).toBe(false);
  });

});
