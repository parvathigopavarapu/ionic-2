

import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ItemExtraOptionsListPage, CreateItemExtraOptionsPage } from "../index";
//import { Selected } from "../editselectextraitem/selectextraitem";
//import { ManageExtraitemPage } from "../index";


@Component({
    selector: 'page-editextraitem',
    templateUrl: 'edititemextraoptions.html'
})
export class EditItemExtraOptionsPage {
    basic: string = "basic";
    number = [];
    food = [];
    price = [];
    detail = [];
    items = [];
    name: any;
    Food_Name: any;
    freeQty: any;
    freeQty1: any;
    price1: any;
    variety1 = [];
    details: any;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public params: NavParams) {
        this.name = this.params.get("name")
        this.number = [1, 2, 3, 4, 5, 6, 7]
        this.food = ['Veg Memos', 'Curd Cutlet', 'Fish Kebabs', 'Prons Curry', 'Prons Fry', 'Chilli Chicken', 'Fish Curry'];
        this.price = ['10.30', '14.50', '60.00', '19.30', '20.40', '90.00', '30.20'];
        this.detail = ['Veg Memos Special', 'Snacks', 'Bangada', 'Sea Food', 'Sea Food Special', 'Chicken Special', 'Fish Special'];
        this.freeQty1 = ['2','3','4','5','6','7','8'] ;
        for (let i = 0; i < 7; i++) {
            this.items.push({
                number: this.number[i],
                food: this.food[i],
                price: this.price[i],
                detail: this.detail[i]
            })
        }
        this.Food_Name = [];
        this.freeQty = [];
        this.price1 = [];
        this.details = [];
        this.variety1 = [];

        for (let i = 0; i < 10; i++) {
            this.variety1.push({
                Food_Name: this.Food_Name[i],
                freeQty1: this.freeQty1[i],
                price1: this.price1[i],
                details: this.details[i]
            })
        }
    }
    movetovaritespage() {
        //this.navCtrl.push(Selected1)
    }
    gotolist() {
        this.navCtrl.pop(ItemExtraOptionsListPage)
    }
    stayhere() {
        this.navCtrl.pop(ItemExtraOptionsListPage)
    }
    createItem(name) {
        this.navCtrl.push(CreateItemExtraOptionsPage, { name, data: 'edit' });
    }
    /*
     editfields($event, variety, edit) {
        variety.edit = true;
        return;
    }
    savefields($event,  varity, edit) {

        varity.edit = false;
    }
  editfields1($event,  variety, edit1) {
        variety.edit1 = true;
        return;
    }
    savefields1($event, varity, edit1) {

        varity.edit1 = false;
    }
      editfields2($event, variety, edit2) {
        variety.edit2 = true;
        return;
    }
    savefields2($event,  varity, edit2) {

        varity.edit2 = false;
    }
      editfields3($event, variety, edit3) {
        variety.edit3 = true;
        return;
    }
    savefields3($event,  varity, edit3) {

        varity.edit3 = false;
    }*/
    editpopup(varity) {
        let prompt = this.alertCtrl.create({
            title: "Edit Extra Items",
            cssClass: 'alert-a',
            inputs: [

                {
                    name: 'food',
                    placeholder: 'food name',
                    value: varity.food

                },

                {
                    name: 'detail',
                    placeholder: 'detail',
                    value: varity.detail
                },
                {
                    name: 'price',
                    placeholder: 'price',
                    value: varity.price
                },
                {
                    name: 'freequantity',
                    placeholder: 'free quantity',
                    value: varity.freeQty1
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {


                    }
                },
                {
                    text: 'Update',

                    handler: data => {
                        varity.food = data.food;
                        varity.price = data.price;
                        varity.detail = data.detail;
                        varity.freeQty = data.freequantity;
                    }
                }
            ]
        });

        prompt.present();

    }
    addvariety(variety1) {
        let prompt = this.alertCtrl.create({
            title: "Add Variety",
            inputs: [

                {
                    name: 'Food_Name',
                    placeholder: 'Food Name',
                    // value:variety.name
                },
                {
                    name: 'detail',
                    placeholder: 'Details',

                },

                {
                    name: 'price',
                    placeholder: 'price',
                    // value:variety.price
                },
                {
                    name: 'free_quantity',
                    placeholder: 'free quantity'

                },
            ],
            buttons: [
                {
                    text: 'Cancel',

                    handler: data => {

                        return false;
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        variety1.Food_Name = data.Food_Name;
                        variety1.freeQty = data.serve;
                        variety1.price1 = data.price;
                        variety1.details = data.detail;
                        alert(JSON.stringify(data))
                        //   basic: string = "basic"

                        return true;
                    }
                }
            ]
        }); prompt.present();
    }
}