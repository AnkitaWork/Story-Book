import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocialAuthService, SocialUser, AmazonLoginProvider, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-social-authentication',
  templateUrl: './social-authentication.component.html',
  styleUrls: ['./social-authentication.component.scss']
})
export class SocialAuthenticationComponent implements OnInit {
/**
 * user object
 */
  user: SocialUser;

/**
 * css class on title
 * default: title
 */
 @Input() title: string

  /**
   * Optional click handler
   */
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

/**
 * signInWithGoogle: Method is using to signIn With Google
 */

  signInWithGoogle(): void {
    this.myEvent.next('sign In With Google')
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

/**
 * signInWithFB: Method is using to signIn With FB
 */

  signInWithFB(): void {
    this.myEvent.next('sign In With FB')
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

/**
 * signInWithAmazon:  Method is using to sign In With Amazon
 */

  signInWithAmazon(): void {
    this.myEvent.next('sign In With Amazon')
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

/**
 * signOut : using to sign Out from all social media
 */

  signOut(): void {
    this.myEvent.next('signOut')
    this.authService.signOut();
  }

}
