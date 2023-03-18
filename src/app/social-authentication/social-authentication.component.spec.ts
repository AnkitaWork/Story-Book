import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthenticationComponent } from './social-authentication.component';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';

fdescribe('SocialAuthenticationComponent', () => {
  let component: SocialAuthenticationComponent;
  let fixture: ComponentFixture<SocialAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAuthenticationComponent ],
      imports: [SocialLoginModule],
      providers: [{
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('1086647421044-jbn20cr6e0c921fjfv3q60u0usd8hn1f.apps.googleusercontent.com'),
            },
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('3421361311257393'),
            },
            {
              id: AmazonLoginProvider.PROVIDER_ID,
              provider: new AmazonLoginProvider('amzn1.application-oa2-client.ba587dcbaa0f47768ffd8e57b99bbbaf'),
            },
          ],
        } as SocialAuthServiceConfig,
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method ngOnInit() is working ', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
