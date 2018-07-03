import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateItemExtrasPage } from "./createitemextras/createitemextras";
import { EditItemExtrasPage } from "./edititemextras/edititemextras";
import { ItemExtrasListPage } from "./listitemextras/listitemextras";
//import { ManageExtraitemPage } from "./editselectextraitem/selectextraitem";
import { EditItemExtrasPage1 } from "./selectededititem/selectedititem";





@NgModule({
  declarations: [
    CreateItemExtrasPage,EditItemExtrasPage,ItemExtrasListPage,EditItemExtrasPage1
   
  ],
  imports: [
    IonicPageModule.forChild(CreateItemExtrasPage),
    IonicPageModule.forChild(EditItemExtrasPage),
    IonicPageModule.forChild(ItemExtrasListPage),
     
           IonicPageModule.forChild(EditItemExtrasPage1)
   
  ],
})
export class ManageItemExtrasModule {}