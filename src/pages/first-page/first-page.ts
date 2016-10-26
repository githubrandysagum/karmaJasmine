import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FirstPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first-page',
  templateUrl: 'first-page.html'
})
export class FirstPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FirstPage Page');
  }

}
