import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantmenuPage } from "./restaurantmenu/restaurantmenu";




@NgModule({
  declarations: [
      RestaurantmenuPage
   //BookingsPage,BookingsSubPage
  ],
  imports: [
    IonicPageModule.forChild(RestaurantmenuPage),
     //IonicPageModule.forChild(OpeningHoursEditPage),
   // IonicPageModule.forChild(CollectionsPage),
  ],
})
export class RestaurantmenuModule {}
