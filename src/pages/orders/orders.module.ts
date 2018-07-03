import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage, NewOrdersPage, CollectionsPage, DirectionPage } from './';
import { ModalPage } from "./modal/modal";

@NgModule({
  declarations: [
    OrdersPage,
    NewOrdersPage,
    ModalPage,
    DirectionPage,
    CollectionsPage
  ],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    IonicPageModule.forChild(NewOrdersPage),
    IonicPageModule.forChild(CollectionsPage),
    IonicPageModule.forChild(DirectionPage),
    IonicPageModule.forChild(ModalPage),
  ],
})
export class OrdersModule {}
