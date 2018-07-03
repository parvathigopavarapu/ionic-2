import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
//import { CategoryListPage } from "../index";

@Component({
    selector: 'page-createcategory12',
    templateUrl: 'selectedititem.html'
})
export class EditItemExtrasPage1 {
    name: any;
    constructor(public navCtrl: NavController,public param:NavParams) {
     this.name = this.param.get('name')
    }
gotopreviouspage(){
    
}
}