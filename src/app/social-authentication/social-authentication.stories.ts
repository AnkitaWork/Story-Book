
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { SocialAuthenticationComponent } from './social-authentication.component';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'Social-Authentication/Social-Authentication',
  component: SocialAuthenticationComponent,
  decorators: [
    moduleMetadata({
        imports: [SocialLoginModule,  BrowserModule,
          FormsModule],
        providers: [{
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '1086647421044-jbn20cr6e0c921fjfv3q60u0usd8hn1f.apps.googleusercontent.com'),
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
        }]
    })
  ]
} as Meta
const Template: Story<SocialAuthenticationComponent> = (args: SocialAuthenticationComponent) => ({
  component: SocialAuthenticationComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/social-authentication/social-authentication.component.ts',
  '/social-authentication/social-authentication.component.scss',
  '/social-authentication/social-authentication.component.html'
]);

export const SocialAuthentication = Template.bind({});
SocialAuthentication.args = {
  title:'Social Login Demo',
  myEvent: action('Social Authentication button action')
};
SocialAuthentication.parameters = sourcePreviewParams();

