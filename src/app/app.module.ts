import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'ng-social-login-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaypalComponent } from './paypal/paypal.component';
// import { SOCIAL_CONFIG_KEYS } from './social.config';
const CONFIG = new AuthServiceConfig(
  [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        'AIzaSyBp_eciNc9Ldl5rZL9zZGUHkBvafp6gfVA'
      ),
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('277731613324293'),
    },
  ],
  true
);

// tslint:disable-next-line: typedef
export function provideConfig() {
  return CONFIG;
}
@NgModule({
  declarations: [AppComponent, PaypalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
