import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { SettingsPage, ModalPage, ModalContentPage } from './';
import { LoginPage, PasswordPage, SignupPage, StartPage, LoadingPage, ConfirmPage } from './';
import { RestaurantmenuPage } from "./restaurents/restaurents";

@NgModule({
  declarations: [
   LoginPage, 
   PasswordPage,
   SignupPage,
   StartPage,
   LoadingPage,
   RestaurantmenuPage,
   ConfirmPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(PasswordPage),
    IonicPageModule.forChild( SignupPage),
    IonicPageModule.forChild( StartPage),
     IonicPageModule.forChild( LoadingPage),
      IonicPageModule.forChild( RestaurantmenuPage),
       IonicPageModule.forChild( ConfirmPage),
  ],
})
export class LoginModule {}