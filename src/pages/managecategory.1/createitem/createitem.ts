import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemListPage1 } from "../index";
//import { CategoryListPage } from "../index";

@Component({
    selector: 'page-createitem',
    templateUrl: 'createitem.html'
})
export class CreateItemPage {
    select: any;
    name1: any;
    basic: string = "basic";
    failure: boolean = false
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.name1 = this.params.get('name');
        this.select = ['Starters', 'Tandoori Dishes', 'Vegetable Side Dishes', 'Biryani Dishes ', 'Rice Dishes'];

    }
    gotopreviouspage() {

        this.navCtrl.pop(ItemListPage1)
        //, 'Chutney Pickcles', 'Sundries and Side Dishes', 'Soft Drinks', 'Curries', ' Meal Deals', 'Chef’s Special Dishes', 'Fast Food', 'Fried Chicken ', 'Chicken Meals', 'Pizza Meal Deals', 'Pizzas', 'Side Orders'
    }
    gotonextpage() {
        this.navCtrl.pop(ItemListPage1)

    }
    gotolist(itemname) {

        if (itemname == null) {
            this.failure = true;
        }
        else {
            this.failure = false;
            this.navCtrl.pop(ItemListPage1)
        }
        return
    }
    stayhere() {
        this.navCtrl.pop(ItemListPage1)

    }
}