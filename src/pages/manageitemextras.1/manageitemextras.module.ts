import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateItemExtraOptionsPage } from "./createitemextraoptions/createitemextraoptions";
import { ItemExtraOptionsListPage } from "./listitemextraoption/listitemextraoption";
import { EditItemExtraOptionPage1 } from "./selectededititemoption/selectedititemoption";
import { EditItemExtraOptionsPage } from "./index";
//import { EditItemExtraOptionsPage } from "./edititemextraoptions/edititemextraoptions";





@NgModule({
  declarations: [
    CreateItemExtraOptionsPage,EditItemExtraOptionsPage,ItemExtraOptionsListPage,EditItemExtraOptionPage1
   
  ],
  imports: [
    IonicPageModule.forChild(CreateItemExtraOptionsPage),
   IonicPageModule.forChild(EditItemExtraOptionsPage),
     IonicPageModule.forChild(ItemExtraOptionsListPage),
      IonicPageModule.forChild(EditItemExtraOptionPage1)
   
  ],
})
export class ManageItemExtraOptionsModule {}