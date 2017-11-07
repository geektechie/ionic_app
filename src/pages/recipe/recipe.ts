import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

	public details;
  constructor(public navCtrl: NavController, public http:Http,public navparams :NavParams ) {
  this.details=navparams.get("details");

  console.log(this.details);
  }




}
