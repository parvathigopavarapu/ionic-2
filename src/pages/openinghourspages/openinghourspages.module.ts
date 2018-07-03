import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpeningHoursPage } from "./openinghours/openingHours";
import { OpeningHoursEditPage } from "./index";



@NgModule({
  declarations: [
      OpeningHoursPage,OpeningHoursEditPage
   //BookingsPage,BookingsSubPage
  ],
  imports: [
    IonicPageModule.forChild(OpeningHoursPage),
     IonicPageModule.forChild(OpeningHoursEditPage),
   // IonicPageModule.forChild(CollectionsPage),
  ],
})
export class OpeningHoursModule {}
