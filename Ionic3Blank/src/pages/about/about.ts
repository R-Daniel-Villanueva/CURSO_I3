import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { HomePage } from '../home/home';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name:any;
  names=['ROQUE','BENIGNO','IVETTE','JULIA'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  goHome(){
    this.navCtrl.push(AboutPage);
  }
  cleanStack(){
    this.navCtrl.setRoot(HomePage);
  }

}
