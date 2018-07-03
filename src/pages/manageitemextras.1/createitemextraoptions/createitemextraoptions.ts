import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemExtraOptionsListPage } from "../index";
//import { ItemExtraOptionsListPage } from "../../manageitemextraoptions/index";
//import { CategoryListPage } from "../index";

@Component({
    selector: 'page-createitemextra',
    templateUrl: 'createitemextraoptions.html'
})
export class CreateItemExtraOptionsPage {
    basic: string = "basic";
    number = [];
    food = [];
    price = [];
    detail = [];
    items = [];
    name: any;
    edit:any;
     failure: boolean = false;
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.name = this.params.get('name')
         this.edit = this.params.get('data')
        this.number = [1, 2, 3, 4, 5, 6, 7]
        this.food = ['Veg Memos', 'Curd Cutlet', 'Fish Kebabs', 'Prons Curry', 'Prons Fry', 'Chilli Chicken', 'Fish Curry'];
        this.price = ['10.30', '14.50', '60.00', '19.30', '20.40', '90.00', '30.20'];
        this.detail = ['Veg Memos Special', 'Snacks', 'Bangada', 'Sea Food', 'Sea Food Special', 'Chicken Special', 'Fish Special']
        for (let i = 0; i < 7; i++) {
            this.items.push({
                number: this.number[i],
                food: this.food[i],
                price: this.price[i],
                detail: this.detail[i]
            })
        }
    }
    gotopreviouspage() {
        this.navCtrl.pop(ItemExtraOptionsListPage)

    }
    gotonextpage() {
        this.navCtrl.pop(ItemExtraOptionsListPage)

    }

    gotolist(itemname) {

        if (itemname == null) {
            this.failure = true;
        }
        else {
            this.failure = false;
            this.navCtrl.pop(ItemExtraOptionsListPage)
        }
        return
    }
    stayhere() {
        this.navCtrl.pop(ItemExtraOptionsListPage)
    }
}