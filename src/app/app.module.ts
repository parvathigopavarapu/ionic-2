import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeModule } from '../pages/homemain/home.module';
import { BookingsModule } from '../pages/bookings/bookings.module';
import { AboutUsPage } from '../pages/aboutUs/aboutUs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OrdersModule } from '../pages/orders/orders.module';
import { SettingsModule } from '../pages/settings/settings.module'
import { LoginModule } from "../pages/login/login.module";
import { RestaurantPage } from "../pages/restaurant/restaurant";
import { MenuModule } from "../pages/menu/menu.module";
import { DataProvider } from '../providers/data/data';
import { FGPWModule } from "../pages/forgotpw/forgotpw.module";
import { mobileRegModule } from "../pages/mobilereg/mobilereg.module";
import { ActionModule } from "../pages/actionpages/actionpage.module";
import { ChartsPage } from "../pages/charts/charts";
import { OpeningHoursModule } from "../pages/openinghourspages/openinghourspages.module";

import { TableReservationModule } from "../pages/tablereservation/tablereservation.module";
import { HolidayModule } from "../pages/holiday/holiday.module";
import { DeliveryModule } from "../pages/deliveryzonepage/deliveryzonepage.module";
import { ConfirmReservationPage } from "../pages/tablereservation/confirmreservation/confirmreservation";

import { Editpage } from "../pages/edit/edit";
import { RestaurantmenuModule } from "../pages/restaurantmenu/restaurantmenu.module";
import { ManageCategoryModule } from "../pages/managecategory/managecategory.module";
import { ManageItemModule } from "../pages/managecategory.1/manageitem.module";
import { MenuManagementModule } from "../pages/menumanagement/manumanagement.module";
//import { ManageItemExtrasOptionsModule } from "../pages/manageitemextraoptions/manageitemextraoptions.module";
import { ManageItemExtrasModule } from "../pages/manageitemextras/manageitemextras.module";
import { ManageItemExtraOptionsModule } from "../pages/manageitemextras.1/manageitemextras.module";
import { RestaurantmenuPage12 } from "../pages/menumanagement/index";
//import { DirectivesModule } from "../pages/directives/directives.module";
//import { AnimateItemSliding } from "../pages/directives/animate-item-sliding/animate-item-sliding";
//import { AnimateItemSliding } from '../components/animate-item-sliding/animate-item-sliding';

@NgModule({

  declarations: [
    
    MyApp,
    TabsPage,
    ChartsPage,
    AboutUsPage,
    RestaurantPage,ConfirmReservationPage,
    Editpage

  ],
  imports: [
    
    BrowserModule,
    HomeModule,
    OrdersModule,
    FGPWModule,
    mobileRegModule,
    OpeningHoursModule,
    MenuModule,
    MenuManagementModule,
    BookingsModule,
    TableReservationModule,
    ManageCategoryModule,
    ManageItemModule,
    ManageItemExtraOptionsModule,
    ManageItemExtrasModule,
   
    HttpModule,
    HolidayModule,
    SettingsModule,
    LoginModule,
    ActionModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    DeliveryModule,
 
     RestaurantmenuModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChartsPage,
    AboutUsPage,
    RestaurantPage,
    ConfirmReservationPage,
    
    Editpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule { }
