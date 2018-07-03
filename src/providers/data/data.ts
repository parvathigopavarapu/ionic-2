import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import * as _ from 'underscore';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  loadData(): Promise<any> {
    if (this.data) {
      return Promise.resolve(this.data);
      
    }

    return new Promise(resolve => {
      this.http.get('/assets/data.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  getMenu(): Promise<any> {
    return new Promise(resolve => {
      this.loadData().then((val) => {
        resolve(val.menu);
      });
    })
  }
  

}
