import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TableReservationPage } from "./tablereservationmain/tablereservationmain";
import { TableReservationMainPage } from "./tablenavigation/tablenavigation";
import { ReservationListPage } from "./allreservations/allreservations";
import { TableCollectionsPage } from "./tablecollections/tablecollections";
import { ActionPage1 } from "./actionpage1/actionpage1";
import { ActionPage2 } from "./actionpage2/actionpage2";
import { CreateReservationPage } from "./createreservation/createreservation";
import { SelectSlotPage } from "./selectslot/selectslot";

@NgModule({
  declarations: [
    TableReservationPage,
    TableReservationMainPage,
    ReservationListPage,
    TableCollectionsPage,ActionPage1,ActionPage2,CreateReservationPage,SelectSlotPage
  ],
  imports: [
    IonicPageModule.forChild(TableReservationPage),
    IonicPageModule.forChild(TableReservationMainPage),
    IonicPageModule.forChild(ReservationListPage),
    IonicPageModule.forChild(TableCollectionsPage),
     IonicPageModule.forChild(ActionPage1),
     IonicPageModule.forChild(ActionPage2),
      IonicPageModule.forChild(SelectSlotPage),
IonicPageModule.forChild(CreateReservationPage),

  ],
})
export class TableReservationModule { }