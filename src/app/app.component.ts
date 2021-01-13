import { Component, OnInit } from '@angular/core';
import {
  SocialUser,
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'ng-social-login-module';

import { from } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-social-login-module demo';

  user: SocialUser;

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log('user:', user);
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log('user obj from component', user);
    }).catch((err) => {
      console.log('error from component', err);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithG(): void {
    console.log('clicked');
    from(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID))
      .pipe(
        takeWhile(() => {
          console.log('inside');
          return true;
        })
      ).subscribe((user: SocialUser) => {
        console.log(user);
      });
  }

  signOut(): void {
    this.authService.signOut().then(
      console.log
    ).catch(
      console.log
    );
  }
}
