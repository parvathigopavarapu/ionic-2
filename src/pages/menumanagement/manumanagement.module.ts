import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateMenuPage } from './createmenu/createmenu';
import { MenuManagementPage } from './managemenu/managemenu';
import { RestaurantmenuPage12 } from "./restaurantmenu/restaurantmenu12";
import { DirectivesModule } from "../directives/index";
//import { DirectivesModule } from "../directives/directives.module";
@NgModule({
 
  declarations: [
    CreateMenuPage, MenuManagementPage, RestaurantmenuPage12
  ],
  imports: [
    IonicPageModule.forChild(CreateMenuPage),
    IonicPageModule.forChild(MenuManagementPage),
    IonicPageModule.forChild(RestaurantmenuPage12),
   DirectivesModule,
  ],
})
export class MenuManagementModule {
  
 }
