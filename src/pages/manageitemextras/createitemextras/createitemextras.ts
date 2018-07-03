import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemExtrasListPage, EditItemExtrasPage } from "../index";
//import { CategoryListPage } from "../index";

@Component({
    selector: 'page-createitemextra',
    templateUrl: 'createitemextras.html'
})
export class CreateItemExtrasPage {
    basic: string = "basic";
    number = [];
    food = [];
    price = [];
    detail = [];
    items = [];
    name: any;
    country: any;
    edit:any;
    failure: boolean = false
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.name = this.params.get('name');
        this.edit = this.params.get('data')
        this.country = ['india', 'Us', 'UK', 'Afghanistan', 'Albania', 'Albania', 'Albania'];
        this.number = [1, 2, 3, 4, 5, 6, 7]
        this.food = ['Veg Memos', 'Curd Cutlet', 'Fish Kebabs', 'Prons Curry', 'Prons Fry', 'Chilli Chicken', 'Fish Curry'];
        this.price = ['10.30', '14.50', '60.00', '19.30', '20.40', '90.00', '30.20'];
        this.detail = ['Veg Memos Special', 'Snacks', 'Bangada', 'Sea Food', 'Sea Food Special', 'Chicken Special', 'Fish Special']
        for (let i = 0; i < 7; i++) {
            this.items.push({
                number: this.number[i],
                food: this.food[i],
                price: this.price[i],
                detail: this.detail[i],
                country: this.country[i]
            })
        }
    }
    gotopreviouspage() {
        // let name=this.name;
        this.navCtrl.pop(ItemExtrasListPage)

    }
    gotonextpage() {
        this.navCtrl.pop(ItemExtrasListPage)

    }
    gotolist(itemname) {

        if (itemname == null) {
            this.failure = true;
        }
        else {
            this.failure = false;
            this.navCtrl.pop(ItemExtrasListPage)
        }
        return
    }
    stayhere() {
        this.navCtrl.pop(ItemExtrasListPage)
    }
    gotolist1(name){
        this.navCtrl.push(EditItemExtrasPage,{name,value:'extra'})
    }
}