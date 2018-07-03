import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SignupPage, LoadingPage } from "../index";
import { PassWordPage } from "../../forgotpw/index";



@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    failure: boolean = false;

    usercreds = {
        name: '',
        password: ''
    }

    constructor(public nav: NavController) {
    }

    login(user) {
            if (user.name == user.password && user.name != '') {
                window.localStorage.setItem("session", user.name);
                this.failure = false;
                this.nav.push(LoadingPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
            } else {
                this.failure = true;
            }
        }
        signup() {
               this.nav.push(SignupPage,{animate: true,direction: 'forward',animation: 'ios-transition'});
            }
            gotofotgotpasswordpage(){
                this.nav.push(PassWordPage,{animate: true,direction: 'forward',animation: 'ios-transition'})
            }
}
