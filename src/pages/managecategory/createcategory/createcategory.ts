import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { CategoryListPage } from "../index";

@Component({
    selector: 'page-createcategory',
    templateUrl: 'createcategory.html'
})
export class CreateCategoryPage {
    name:any;
    constructor(public navCtrl: NavController,public param:NavParams) {
        this.name=this.param.get('name1')
    }
    gotopreviouspage(){
        this.navCtrl.pop(CategoryListPage)

    }
    gotonextpage(){
          this.navCtrl.pop(CategoryListPage)

    }
}