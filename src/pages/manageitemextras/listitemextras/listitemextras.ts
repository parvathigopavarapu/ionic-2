
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,NavParams } from 'ionic-angular';
import { CreateItemExtrasPage, EditItemExtrasPage } from "../index";


@Component({
    selector: 'page-extraitem',
    templateUrl: 'listitemextras.html'
})
export class ItemExtrasListPage {
    number = [];
    food = [];
    detail = [];
    price = [];
    notes = [];
    items = [];
    name:any;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController,public params:NavParams) {
            this.name = this.params.get('name1');
        this.number = [1, 2, 3, 4, 5, 6, 7];
        this.food = ['White Pasta', 'Noodles', 'Gobi', 'kofta Curry', 'Channa Masala', 'Bajji', 'Pizza'];
        this.detail = ['Just lije home made', 'Taste with fun', 'Chilli Gobi', 'North Indian special','Real taste of spice', 'Serve hot', 'Made with Love'];
        this.price = ['2.90', '3.60', '10.20', '40.00', '70.00', '10.00', '18.30']

         for(let i = 0; i < 7 ;i++){
        this.items.push({
           number:this.number[i],
           food:this.food[i],
           detail:this.detail[i],
           notes:this.notes[i],
           price:this.price[i]
        })
    }
}
createItemExtra(){
    let name = this.name;
    this.navCtrl.push(CreateItemExtrasPage,{name})
}
editfields(food){
      let name = this.name;
    this.navCtrl.push(EditItemExtrasPage,{name,food})
}
}