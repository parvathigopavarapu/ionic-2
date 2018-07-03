import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { DataProvider } from '../../../providers/data/data';
import { EditCategoryPage, CreateCategoryPage } from "../index";

@Component({
    selector: 'page-categorylist',
    templateUrl: 'categorylist.html'
})
export class CategoryListPage {
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
        this.navCtrl.push(EditCategoryPage,{item,name1})

    }
    createCategory(){
         let name1=this.name;
         this.navCtrl.push(CreateCategoryPage,{name1})

    }
   
    
}