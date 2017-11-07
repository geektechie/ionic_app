import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecipePage } from '../recipe/recipe';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	recipes: any;
  constructor(public navCtrl: NavController, public http:Http) {


   this.http.get('http://localhost:49919/api/ChefyTricksAPI/recipeList').subscribe(data => {
        var response = data.json();
      
        this.recipes=response.recipes;
       
    });

  }



details(r){
	console.log(r);
  this.navCtrl.push(RecipePage,{details:r});
}
}
