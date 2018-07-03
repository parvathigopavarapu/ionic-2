import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

@Component({
    selector: 'page-createcategory12',
    templateUrl: 'selectedititemoption.html'
})
export class EditItemExtraOptionPage1 {
    name:any;
    constructor(public navCtrl: NavController,public params:NavParams) {
        this.name = this.params.get("name")
     
    }
gotopreviouspage(){
    //this.navCtrl.pop(Selected1)
}
}