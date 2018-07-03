import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { SettingsPage, ModalPage, ModalContentPage } from './';
import { SettingsPage, ModalPage } from './';
@NgModule({
  declarations: [
    SettingsPage,
    ModalPage,
   // ModalContentPage
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    IonicPageModule.forChild(ModalPage),
    //IonicPageModule.forChild(ModalContentPage)
  ],
})
export class SettingsModule {}