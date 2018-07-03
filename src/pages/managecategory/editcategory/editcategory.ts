import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { CategoryListPage } from "../index";

@Component({
    selector: 'page-editcategory',
    templateUrl: 'editcategory.html'
})
export class EditCategoryPage {
    item:any;
    name:any;
    constructor(public navCtrl: NavController,public params:NavParams) {
     this.item=this.params.get('item')
        this.name=this.params.get('name1')
    }
    gotopreviouspage(){
        this.navCtrl.pop(CategoryListPage);

    }
    gotonextpage(){
         this.navCtrl.pop(CategoryListPage);

    }
}