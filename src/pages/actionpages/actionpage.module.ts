import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Step1Page } from "./step1page/step1page";
import { Step2Page } from "./step2page/step2page";

@NgModule({
  declarations: [
     Step1Page,Step2Page
  ],
  imports: [
    IonicPageModule.forChild(Step1Page),
      IonicPageModule.forChild(Step2Page),
  ],
})
export class ActionModule {}
