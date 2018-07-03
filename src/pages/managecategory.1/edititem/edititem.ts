import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../../providers/data/data';
import { ItemListPage1 } from "../index";

@Component({
    selector: 'page-editmenu',
    templateUrl: 'edititem.html'
})
export class EditItemPage {
    menu: any;
    Variety_Name = [];
    serve: any;
    name: any;
    price: any;
    name1: any;
    name2: any;
    variety1 = [];
    variety2 = [];
    dietary_name:any;
    basic: string = "basic"
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public dataProvider: DataProvider, public params: NavParams) {
        this.name = this.params.get('item')
        this.name1 = this.params.get('name');
        this.name2 = this.params.get('variety');
        dataProvider.getMenu().then((menu) => {
            this.menu = menu;
        });
        this.initialzer();
        this.Variety_Name = [];
        this.serve = [];
        this.price = []
        this.variety1 = [];
        for (let i = 0; i < 10; i++) {
            this.variety1.push({
                Variety_Name: this.Variety_Name[i],
                serve: this.serve[i],
                price: this.price[i]
            })
        }
        this.dietary_name=[];
        for(let i = 0;i < 10;i++)
        {
            this.variety2.push({
                dietary_name:this.dietary_name[i]
            })
        }
        // alert(JSON.stringify(this.variety1))
    }
    initialzer() {
        return this.menu;
    }
    gotolist() {
        this.navCtrl.pop(ItemListPage1)
    }
    stayhere() {
        this.navCtrl.pop(ItemListPage1)
    }
    editfields($event, variety, edit) {
        variety.edit = true;
        variety.edit1 = false;
        return;
    }
    savefields($event, varity, edit) {
        varity.edit1 = false;
        varity.edit = false;
      //  varity.edit2= true;
    }
    editfields1($event, variety, edit1) {
        variety.edit1 = true;
        variety.edit = false;
        return;
    }
    savefields1($event, varity, edit1) {
        varity.edit = false;
        varity.edit1 = false;
        //  varity.edit2= true;
    }
    addvariety(variety1) {
        let prompt = this.alertCtrl.create({
            title: "Add Variety",
            inputs: [

                {
                    name: 'Variety_Name',
                    placeholder: 'Variety_Name',
                    // value:variety.name
                },

                {
                    name: 'price',
                    placeholder: 'price',
                    // value:variety.price
                },
                {
                    name: 'serve',
                    placeholder: 'serve'

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
                        variety1.Variety_Name = data.Variety_Name;
                        variety1.serve = data.serve;
                        variety1.price = data.price;
                        alert(JSON.stringify(data))
                        //   basic: string = "basic"
                        return true;
                    }
                }
            ]
        }); prompt.present();
    }
    adddietary(variety2) {
        let prompt = this.alertCtrl.create({
            title: "Add Variety",
            inputs: [
                {
                    name: 'Dietary_Name',
                    placeholder: 'Dietary_name',
                    // value:variety.name
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
                        variety2.dietary_Name = data.Dietary_Name;
                        return true;
                    }
                }
            ]
        }); prompt.present();

    }


}
