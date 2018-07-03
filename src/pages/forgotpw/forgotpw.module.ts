import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassWordPage } from "./pwpage/pwpage1";
import { PassWordPage2 } from "./pwpage2/pwpage2";
import { PassWordPage3 } from "./pwpage3/pwpage3";
import { PassWordPage4 } from "./pwpage4/pwpage4";

@NgModule({
  declarations: [
     PassWordPage,PassWordPage2,PassWordPage3,PassWordPage4
   //BookingsPage,BookingsSubPage
  ],
  imports: [
    IonicPageModule.forChild(PassWordPage),
      IonicPageModule.forChild(PassWordPage2),
       IonicPageModule.forChild(PassWordPage3),
       IonicPageModule.forChild(PassWordPage4),
  ],
})
export class FGPWModule {}
