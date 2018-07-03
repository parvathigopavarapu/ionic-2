import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CreateItemPage } from "./createitem/createitem";
import { EditItemPage } from "./edititem/edititem";
import { ItemListPage } from "./itemlist/itemlist";
import { ItemListPage1 } from "./manageitemlist1/itemlist1";

@NgModule({
  declarations: [
    CreateItemPage,EditItemPage,ItemListPage,ItemListPage1
   
  ],
  imports: [
    IonicPageModule.forChild(CreateItemPage),
    IonicPageModule.forChild(EditItemPage),
    IonicPageModule.forChild(ItemListPage),
     IonicPageModule.forChild(ItemListPage1)
   
  ],
})
export class ManageItemModule {}//