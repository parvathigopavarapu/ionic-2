import { Component, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../homemain';
import { OrdersPage } from '../orders';
import { BookingsPage } from '../bookings';
import { SettingsPage } from '../settings';
import { AboutUsPage } from "../aboutUs/aboutUs";
@Component({
  selector: 'page-home',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  [x: string]: any;
  tab1Root: any = HomePage;
  tab2Root: any = OrdersPage;
  tab3Root: any = BookingsPage;
  tab4Root: any = SettingsPage;
  tab5Root: any = AboutUsPage;
  @ViewChild(HomePage) homePage: HomePage;
  constructor(public params: NavParams) {
    this.activeTab = this.params.get('tabIndex');
    this.activepage = this.params.get('loadComponent');
    this.name = this.params.get('restaurant_name')
    //alert(this.activeTab + " - " + this.activepage)
   /* if(this.activepage != null) {
      this.tab1Root.openNewPage(this.activepage);
    }*/
  }
}
