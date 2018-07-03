import { Component } from '@angular/core';
import { NavController, App, ViewController, reorderArray, NavParams } from 'ionic-angular';
import { MenuMainPage } from "../index";
import { DataProvider } from '../../../providers/data/data';
import * as _ from "underscore";

@Component({
  selector: 'page-new321',
  templateUrl: 'menutheme.html'
})
export class MenuthemePage {
  songs: any[];
  menu: any;
  item: any;
  item_name: any;
  items_total: any;
  all_items: any;
  category: any;
  // editButton: string = 'Edit';
  // editing: boolean = false;

  constructor(public navCtrl: NavController, public dataProvider: DataProvider, public params: NavParams, public view: ViewController) {
    dataProvider.getMenu().then((menu) => {
      this.menu = menu;
    });
    this.initialzer();
    this.item = this.params.get('item');
    // alert("item"+this.item);
    this.item_name = this.params.get('item_name');
    //alert("item_name"+JSON.stringify(this.item_name));
    this.items_total = this.params.get('items_total');
    //console.log("items_total"+JSON.stringify(this.items_total));
    //this.all_items = this.params.get('all_items');

    this.category = ['Starters', 'Tandoori Dishes', 'Vegetable Side Dishes', 'Biryani Dishes ', 'Rice Dishes', 'Chutney Pickcles', 'Sundries and Side Dishes', 'Soft Drinks', 'Curries', ' Meal Deals', 'Chef’s Special Dishes', 'Fast Food', 'Fried Chicken ', 'Chicken Meals', 'Pizza Meal Deals', 'Pizzas', 'Side Orders'];
  }
  initialzer() {
    return this.menu;
  }

  dismiss() {
    this.view.dismiss();
  }
  dismisswithmove(categoty) {
    this.view.dismiss();
    let index = this.items_total.indexOf(this.item_name);
    if (index > -1) {

      this.items_total.splice(index, 1);
    }
 
    categoty.push(this.item_name);
 
  }

}