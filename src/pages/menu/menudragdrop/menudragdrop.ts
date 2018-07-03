import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, reorderArray, AlertController,ModalController } from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';

import * as _ from 'underscore';
import { MenuthemePage } from "../index";

@Component({
    selector: 'page-new123',
    templateUrl: 'menudragdrop.html'
})
export class MenuDragDropPage {
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
        toggleDetails(data) {
        //alert(data.showDetails);
        if (data.showDetails) {
            data.showDetails = true
            ;
            data.icon = 'ios-arrow-down-outline';
        } else {
            let opened = _.where(this.menu, { "showDetails": true })

            _.each(opened, function (item) {
             //  console.log(JSON.stringify(item))
                data.showDetails = true;
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
    //end of search

    reorderData(indexes: any) {
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
    
    moveto(item, item_name,items_total,all_items) {
        let modal = this.modalCtrl.create(MenuthemePage,{item,item_name,items_total,all_items});
        modal.present();
      }
}