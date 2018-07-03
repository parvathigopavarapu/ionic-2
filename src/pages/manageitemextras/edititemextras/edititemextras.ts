

import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ItemExtrasListPage, CreateItemExtrasPage } from "../index";
//import { ManageExtraitemPage } from "../index";


@Component({
  selector: 'page-editextraitem',
  templateUrl: 'edititemextras.html'
})
export class EditItemExtrasPage {
  basic: string = "basic";
  extra_item: string = "extra_item";
  number = [];
  Food_Name:any;
  freeQty:any;
  price1:any;
  variety1=[];
  freeQty1:any;
  food = [];
  price = [];
  detail = [];
  details:any;
  items = [];
  name: any;
  food1: any;
  value: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public params: NavParams) {
    this.name = this.params.get('name');
    this.food1 = this.params.get('food');
    this.value = this.params.get('value')
    this.number = [1, 2, 3, 4, 5, 6, 7]
    this.food = ['Veg Memos', 'Curd Cutlet', 'Fish Kebabs', 'Prons Curry', 'Prons Fry', 'Chilli Chicken', 'Fish Curry'];
    this.freeQty1 = ['2','3','4','5','6','7','8'] ;
    this.price = ['10.30', '14.50', '60.00', '19.30', '20.40', '90.00', '30.20'];
    this.detail = ['Veg Memos Special', 'Snacks', 'Bangada', 'Sea Food', 'Sea Food Special', 'Chicken Special', 'Fish Special']
    for (let i = 0; i < 7; i++) {
      this.items.push({
        number: this.number[i],
        food: this.food[i],
        price: this.price[i],
        detail: this.detail[i],
        freeQty1:this.freeQty1[i]
      })
    }
         this.Food_Name = [];
        this.freeQty = [];
        this.price1 = [];
        this.details=[];
        this.variety1=[];

        for (let i = 0; i < 10; i++) {
            this.variety1.push({
                Food_Name: this.Food_Name[i],
                freeQty: this.freeQty[i],
                price1:this.price1[i],
                details: this.details[i]
            })
        }
  }
  movetovaritespage() {

  }
  gotoList() {
    let name = this.name;
    this.navCtrl.push(ItemExtrasListPage, { name })
  }
  cancel() {
    let name = this.name;
    this.navCtrl.push(ItemExtrasListPage, { name })
  }
  gotolist() {
    this.navCtrl.pop(ItemExtrasListPage)
  }
  stayhere() {
    this.navCtrl.pop(ItemExtrasListPage)
  }
  createItem(name) {
    this.navCtrl.push(CreateItemExtrasPage, { name, data: 'edit'})
  }
  
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
                  name:'detail',
                  placeholder:'Details',

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
                        variety1.details=data.detail;
                        alert(JSON.stringify(data))
                        //   basic: string = "basic"

                        return true;
                    }
                }
            ]
        }); prompt.present();
    }
   
}