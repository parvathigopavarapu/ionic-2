import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HolidayPage } from "./holidaylist/holidaylist";
import { HolidayEditPage } from "./editholidaylist/editholidaylist";

@NgModule({
  declarations: [
 HolidayPage,HolidayEditPage
  ],
  imports: [
    IonicPageModule.forChild(HolidayPage),
      IonicPageModule.forChild(HolidayEditPage),
  ],
})
export class HolidayModule {}