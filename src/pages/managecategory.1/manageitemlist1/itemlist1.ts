import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { CreateItemPage, EditItemPage } from "../index";

@Component({
    selector: 'page-itemlist1',
    templateUrl: 'itemlist1.html'
})
export class ItemListPage1 {
    names = [];
    notes = [];
    items = [];
    menu: any;
    index: any;
    name: any;
    name1: any;
    constructor(public navCtrl: NavController, public dataProvider: DataProvider, public params: NavParams, public alertCtrl: AlertController) {
        /* this.names= ['Specials','Salads','Entrees','Desserts','Snaks'];
         this.notes=['All specials come with rice,2 sides and waffels.',
         'All types of nutrients salads with special taste.',
         'All entrees include a salad and garlic bread of vour choice.',
         'All special desserts come with special servings.',
         'All entrees include a salad and garlic bread of vour choice.'];
           for (let i = 0; i < 5; i++) {
          this.items.push({
            names: this.names[i],
            notes: this.notes[i]
          });
        }*/
        this.index = this.params.get('index');
        this.name = this.params.get('name');
        this.name1 = this.params.get('name1');
        // alert(this.name)
        //alert(this.index)
        dataProvider.getMenu().then((menu) => {
            this.menu = menu;
        });
        this.initialzer();
    }
    initialzer() {
        return this.menu;
    }
    createItem() {
        let name = this.name1;
        this.navCtrl.push(CreateItemPage, { name })
    }
    editfields(item, index, variety) {
        let name = this.name1;
        this.navCtrl.push(EditItemPage, { item, name, variety })

    }
    /*   openpopup() {
           let prompt = this.alertCtrl.create({
               title: 'Filter By',
               inputs: [
                   {
                       type: 'radio',
                       label: 'more than 2pounds',
                       value: 'more than 2pounds'
                   },
                   {
                       type: 'radio',
                       label: 'less than 2pounds',
                       value: 'less than 2pounds'
                   }],
               buttons: [
                   {
                       text: "Cancel",
                       handler: data => {
                           console.log("cancel clicked");
                       }
                   },
                   {
                       text: "Search",
                       handler: data => {
                           console.log("search clicked");
                       }
                   }]
           });
   
           prompt.present();
       }*/
    openpopup(varity) {
        alert(JSON.stringify(varity))
        //console.log("hello"+JSON.stringify(menu))
        this.menu = this.menu.filter((varity) => {
            //     let van = varity.items;
            // console.log("hello1"+JSON.stringify(van))
            //      let man = van[0].varities;
            //      console.log(JSON.stringify(man[0].price))
            return varity.price > 4.0

        })
    }


}