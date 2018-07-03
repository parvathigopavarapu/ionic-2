import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsPage } from './';
import { BookingsSubPage } from "./bookingspage/bookingspage";


@NgModule({
  declarations: [
   BookingsPage,BookingsSubPage
  ],
  imports: [
    IonicPageModule.forChild(BookingsPage),
   IonicPageModule.forChild(BookingsSubPage),
   // IonicPageModule.forChild(CollectionsPage),
  ],
})
export class BookingsModule {}
