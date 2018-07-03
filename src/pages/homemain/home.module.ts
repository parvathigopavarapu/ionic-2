import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from "./home/home";
import { HomeModalPage } from "./homemodal/homemodal";
//import { HomePage } from '';
//import { BookingsSubPage } from "./bookingspage/bookingspage";


@NgModule({
  declarations: [
      HomePage,HomeModalPage
   //BookingsPage,BookingsSubPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
     IonicPageModule.forChild(HomeModalPage),
   // IonicPageModule.forChild(CollectionsPage),
  ],
})
export class HomeModule {}
