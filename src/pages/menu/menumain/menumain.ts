import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, reorderArray, AlertController,ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

import * as _ from 'underscore';
import { MenuthemePage, MenuDragDropPage } from "../index";

@Component({
    selector: 'page-new12',
    templateUrl: 'menumain.html'
})
export class MenuMainPage {
    @ViewChild(Content) content: Content;

    [x: string]: any;
    menu: any = null;
    count: any;
    public hidden: boolean[] = [];
    constructor(public navCtrl: NavController, public dataProvider: DataProvider, public params: NavParams, public alertCtrl: AlertController,public modalCtrl:ModalController) {
        this.count = 1;
        this.activeTheme = this.params.get('themeIndex');

        dataProvider.getMenu().then((menu) => {
            this.menu = menu;

        });
        this.initialzer();
    }
    initialzer() {
        return this.menu;
    }

    getItems(searchbar) {
        this.initialzer();
        let val = searchbar.target.value;
        if (val && val.trim() != '') {
            this.menu = this.menu.filter((menu1) => {
                if (menu1.items[0].name.toLowerCase().indexOf(val.toLowerCase()) > - 1) {
                    return true;
                }
                return false;
            });
            /*   let searchItem = _.where(this.menu, { val })
               alert(val)
               _.each(searchItem, function (item) {
                 
                   return (searchItem.name.toLowerCase().indexOf(val.toLowerCase()) > - 1)
               })*/
        }
    }
    //end of search

    toggleDetails(data) {
        //alert(data.showDetails);
        if (data.showDetails) {
            data.showDetails = false;
            data.icon = 'ios-arrow-down-outline';
        } else {
            let opened = _.where(this.menu, { "showDetails": true })

            _.each(opened, function (item) {

                data.showDetails = false;
                // item.icon = 'ios-arrow-down-outline';
            })

            data.showDetails = true;
            data.icon = 'ios-arrow-up-outline';
            let that = this;
            setTimeout(function () {
                let element = document.getElementById(data.name);
              //  that.content.scrollTo(0, element.offsetTop - 0, 0);
            }, 0);
        }

        //console.log(open);

    }
   
  /*  reorderData(indexes: any) {
        this.menu = reorderArray(this.menu, indexes);
    }
    reorderData1(indexes: any, category) {
        //  console.log(category)
        category = reorderArray(category, indexes);
    }
    reorderData2(indexes: any, menu) {
        //  console.log(menu)
        menu = reorderArray(menu, indexes);
    }
    move() {
        this.navCtrl.push(MenuthemePage)
    }
    moveto(item, item_name,items_total,all_items) {
        let modal = this.modalCtrl.create(MenuthemePage,{item,item_name,items_total,all_items});
        modal.present();
      }

        let alert = this.alertCtrl.create({

            title: 'Moving the item',
            message: 'Are you sure do you want to move an item?',
            inputs: [
                {
                    name: 'title',
                    value: item
                },
                {
                    name: 'rerty',
                    value: '',
                },
            ],

            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('agree clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: () => {
                        console.log('disagree clicked');
                    }
                }
            ]
        });

        alert.present();
        //alert(item)
    }*/

    }