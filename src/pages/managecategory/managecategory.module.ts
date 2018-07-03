import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCategoryPage } from "./createcategory/createcategory";
import { EditCategoryPage } from "./editcategory/editcategory";
import { CategoryListPage } from "./managecategory/categorylist";

@NgModule({
  declarations: [
    CreateCategoryPage,EditCategoryPage,CategoryListPage,
   
  ],
  imports: [
    IonicPageModule.forChild(CreateCategoryPage),
    IonicPageModule.forChild(EditCategoryPage),
    IonicPageModule.forChild(CategoryListPage),
   
  ],
})
export class ManageCategoryModule {}//