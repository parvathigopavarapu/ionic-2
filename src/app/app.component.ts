import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrdersPage } from '../pages/orders';

import { BookingsPage } from '../pages/bookings';
import { AboutUsPage } from '../pages/aboutUs/aboutUs';
import { SettingsPage } from '../pages/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage, LoginPage } from "../pages/login/index";
import { HolidayPage } from "../pages/holiday/index";
import { DeliveryzonePage } from "../pages/deliveryzonepage/index";
import { CreateReservationPage, SelectSlotPage, TableReservationMainPage } from "../pages/tablereservation/index";
import { HomePage } from "../pages/homemain/index";
import { ConfirmReservationPage } from "../pages/tablereservation/confirmreservation/confirmreservation";
import { OpeningHoursPage } from "../pages/openinghourspages/index";
import { MenuMainPage } from "../pages/menu/index";
import { CreateItemPage } from "../pages/managecategory.1/index";

@Component({

  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild('content') nav: NavController;
  app: any;
  tabIndex: number;
  rootPage: any = TabsPage;
  activePage: any;
  subTitle: string[];
  icon: string[];
  badge: string[];
  component: any;
  components: any;
  index: any;
  items = []
  titles: string[];
  pages = [];
  newpage = [];
  open = [];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.subTitle = [
      'Allorders',
      'New orders',
      'Accepted Orders',
      'Delivered Orders',
      'Rejected Orders'
    ];
    this.icon = ['reorder', 'cart', 'checkmark', 'car', 'close'];
    this.badge = ['90', '5', '10', '25', '50'];
    //this.component = [NewOrdersPage, NewOrdersPage, NewOrdersPage, NewOrdersPage, NewOrdersPage]
    this.items = [];
    this.titles = ['Home', 'Orders', 'Bookings', 'Settings', 'About Us Tab', 'About Us Home']
    this.components = [TabsPage, OrdersPage, BookingsPage, SettingsPage, AboutUsPage, AboutUsPage ]
    this.index = [0, 1, 2, 3, 4, 5]
    this.pages = [];
    this.newpage = [];
    for (let i = 0; i < 7; i++) {
      this.pages.push({
        title: this.titles[i],
        index: this.index[i],
        component: this.components[i]
      })
    }
    /*if (this.titles[1] == 'Orders') {
      for (let i = 0; i < 5; i++) {
        this.newpage.push({

          component: this.component[i],
          subTitle: this.subTitle[i],
          badge: this.badge[i],
          icon: this.icon[i]
        })
      }
    }*/
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPagemain(page) {
    //this.nav.push(page.components)
    // this.app.getRootNav().setRoot(TabsPage, {tabIndex: 1})
    //this.nav.push(TabsPage, { tabIndex: page.index })
    // this.nav.setRoot(page.components)
    //  this.navCtrl.push(page.components);
    if(page.index < 5) {
      this.nav.push(TabsPage, { tabIndex: page.index, loadComponent: null })
    } else {
     // this.nav.push(page.components, {page:page.components})
      //alert(JSON.stringify(page.components))
        this.nav.push(TabsPage, {tabIndex: page.index, loadComponent: page.component})
    }
  }
  openPage(page) {
    // this.nav.push(page.component,{ newItem: page})
    //  this.app.getRootNav().setRoot(TabsPage, { tabIndex: 1 })
    this.nav.push(page.component, { newItem: page });
  }



 
}
