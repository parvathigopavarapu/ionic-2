import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { ItemListPage1, EditItemPage } from "../index"; 

@Component({
    selector: 'page-itemlist',
    templateUrl: 'itemlist.html'
})
export class ItemListPage {
    menu:any;
    name:any;
    constructor(public navCtrl: NavController,public dataProvider:DataProvider,public param:NavParams) {
           this.name=this.param.get('name1')
       dataProvider.getMenu().then((menu) => {
            this.menu = menu;
        });
        this.initialzer();
    }
    initialzer() {
        return this.menu;
    }
    editfields(item,index){
        let name1=this.name;
        this.navCtrl.push(EditItemPage,{item,name1})

    }
    createCategory(){
        // this.navCtrl.push(CreateCategoryPage)

    }
    gotoanotherlist(name){
         let name1=this.name;
        this.navCtrl.push(ItemListPage1,{name,name1})
    }
    
}