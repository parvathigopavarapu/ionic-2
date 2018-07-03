import { Component } from '@angular/core';
import { NavController,NavParams}from 'ionic-angular';
import { CategoryListPage } from "../../managecategory/index";
import { ItemListPage } from "../../managecategory.1/index";
import { ItemExtrasListPage } from "../../manageitemextras/index";
import { ItemExtraOptionsListPage } from "../../manageitemextras.1/index";
import { CreateMenuPage } from "../index";
//import { ItemExtraOptionsListPage } from "../../manageitemextraoptions/index";

@Component({
  selector: 'page-managemenu',
  templateUrl: 'managemenu.html'
})
export class MenuManagementPage {
 name: any;
  constructor(public navCtrl: NavController,public param: NavParams) {
    this.name = this.param.get('item')
   // alert(JSON.stringify(this.name))
  }

  movetocategorylist(){
      let name1=this.name;
      this.navCtrl.push(CategoryListPage,{name1})
  }
  movetoItemslist(){
      let name1=this.name;
       this.navCtrl.push(ItemListPage,{name1})
  }
  movetoItemextraoptions(){
      let name1=this.name;
      this.navCtrl.push(ItemExtraOptionsListPage,{name1})
  }
  movetoItemextras(){
      let name1=this.name;
      this.navCtrl.push(ItemExtrasListPage,{name1})
  }
  edit(){
      this.navCtrl.push(CreateMenuPage,{data:'edit'})
  }
}