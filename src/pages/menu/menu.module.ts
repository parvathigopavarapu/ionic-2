import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuMainPage } from "./menumain/menumain";
import { MenuthemePage } from "./menuthemes/menutheme";
import { MenuDragDropPage } from "./menudragdrop/menudragdrop";
@NgModule({
  declarations: [
    MenuMainPage,
    MenuthemePage,MenuDragDropPage
  ],
  imports: [
    IonicPageModule.forChild(MenuMainPage),
    IonicPageModule.forChild(MenuthemePage),
      IonicPageModule.forChild(MenuDragDropPage)
  ],
})
export class MenuModule {}//