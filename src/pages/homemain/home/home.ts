import { Component } from '@angular/core';
import { NavController, App, MenuController, LoadingController, NavParams,ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
//import { OrdersPage } from '../../orders';
import { TabsPage } from "../../tabs/tabs";
//import { OpeningHoursPage } from "../../openinghours/openingHours";
//import { SettingsPage } from "../../settings/index";
import { AboutUsPage } from "../../aboutUs/aboutUs";

import { HomeModalPage } from "../index";

import { RestaurantPage } from "../../restaurant/restaurant";
import { MenuMainPage, MenuDragDropPage } from "../../menu/index";
import { ChartsPage } from "../../charts/charts";
import { OpeningHoursPage } from "../../openinghourspages/index";
import {  TableReservationMainPage } from "../../tablereservation/index";
import { DeliveryzonePage } from "../../deliveryzonepage/index";
import { HolidayPage } from "../../holiday/index";
import { CategoryListPage } from "../../managecategory/index";
import { ItemListPage } from "../../managecategory.1/index";
import { CreateMenuPage } from "../../menumanagement/index";
import { RestaurantmenuPage12 } from "../../menumanagement/restaurantmenu/restaurantmenu12";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    [x: string]: any;
    //nav: any;
    tabIndex: number;
    constructor(public navCtrl: NavController, private app: App, public menuCtrl: MenuController, public param: NavParams,
        public http: Http, public loadingCtrl: LoadingController,public modalCtrl:ModalController) {

        this.name = param.data;

    }
    openLoadingmodal() {
        let mymodal = this.modalCtrl.create(HomeModalPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
        mymodal.present();
        setTimeout(() => {
            mymodal.dismiss();
        }, 2500);

    }
    openOrdersPage() {
       this.app.getRootNav().push(TabsPage, { tabIndex: 1 ,animate: true,direction: 'forward',animation: 'ios-transition'})
      
    }
    openBookingsPage() {
        this.app.getRootNav().push(TabsPage, { tabIndex: 2 ,animate: true,direction: 'forward',animation: 'ios-transition'})//
    }
    openSettingsPage() {
        this.app.getRootNav().push(TabsPage, { tabIndex: 3,animate: true,direction: 'forward',animation: 'ios-transition'})//
      
    }
    openOpeningHoursPage() {
        this.navCtrl.setRoot(OpeningHoursPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    }
    openAboutUsPage() {
        this.navCtrl.push(AboutUsPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    }
    openDeliveryzonePage() {
        this.navCtrl.setRoot(DeliveryzonePage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    }
    openChartsPage() {
        this.navCtrl.setRoot(ChartsPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    }
    // openNewPage(page) {
    //      this.navCtrl.push(page);
    ////   }
    openMenuPage() {
        this.navCtrl.push(MenuMainPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
        //  let mymodal1 = this.modalCtrl.create(MenuthemePage);
        // mymodal1.present();
    }
    openReservationPage() {
        this.navCtrl.setRoot(RestaurantPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
    }
    openotherPage(){
        this.navCtrl.push(TableReservationMainPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
      }
      openRestaurantMenuPage(){
         // this.navCtrl.push(RestaurantmenuPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
            let modal = this.modalCtrl.create(HolidayPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
             modal.present();
      }
      openmenureorderpage(){
          this.navCtrl.push(MenuDragDropPage)
      }
      manageCategory(){
          this.navCtrl.push(CategoryListPage)


      }
      manageitems(){
            this.navCtrl.push(ItemListPage)
      }
      menu_management(){
          this.navCtrl.push(RestaurantmenuPage12)
      }

}
