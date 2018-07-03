import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryzonePage } from './deliveryzone/deliveryzone';
import { DeliveryzoneEditPage } from './deliveryzoneedit/deliveryzoneedit';


@NgModule({
  declarations: [
     DeliveryzonePage,DeliveryzoneEditPage
  ],
  imports: [
    IonicPageModule.forChild(DeliveryzonePage),
      IonicPageModule.forChild(DeliveryzoneEditPage),
  ],
})
export class DeliveryModule {}
