import { Component } from '@angular/core';
import { NavController}from 'ionic-angular';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
  items = [];
  num = [];
  name= [];
  price=[];
  equal = [];
  range =[];
  constructor(public navCtrl: NavController) {
    this.num = [1,2,3,4,5,6,7,8];
    this.name=['Starter','Tandoori Dishes','Vegetable Side Dishes','Fast Food ',' Soft Drinks','Chicken Meals','Fried Chicken',' Pizzas']
    this.range=
    this.price=[4.30,5.20,6.30,8.50,6.50,4.20,32.20,30.00]
    for (let i = 0; i < 8; i++) {
      this.items.push({
        num: this.num[i],
        name: this.name[i],
        price:this.price[i]
      });
  }
}
}