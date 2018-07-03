import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileRegPage1 } from "./mobilereg1/mobilereg1";
import { MobileRegPage2 } from "./mobilereg2/mobilereg2";
import { MobileRegPage3 } from "./mobilereg3/mobilereg3";


@NgModule({
  declarations: [
    
  MobileRegPage1,MobileRegPage2,MobileRegPage3
  ],
  imports: [
    IonicPageModule.forChild(MobileRegPage1),
      IonicPageModule.forChild(MobileRegPage2),
        IonicPageModule.forChild(MobileRegPage3),
    
  ],
})
export class mobileRegModule {}
