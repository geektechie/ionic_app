import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http , Headers , RequestOptions } from '@angular/http';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	firstname: string = ''; 
	lastname: string = ''; 
	email: string = '';  
	password: string = ''; 
  
   registererror:string='';
  constructor(public navCtrl: NavController, public http:Http) {

  }

  login(){
  this.navCtrl.push(LoginPage);
  }

	register(){
	    var headers = new 	Headers();
		headers.append("content-type",'application/json');
	    let options =  new RequestOptions({headers:headers});

		
		let data = {
		firstname:this.firstname,
		lastname:this.lastname,
		email:this.email,
		password:this.password
		}

		console.log(data);


		this.http.post("http://localhost:49919/api/ChefyTricksAPI/userRegistration",data,options).subscribe(
		data =>{
		
		var response = data.json();
			console.log(response);
			if(response.error_code == 0)
			{
				this.navCtrl.setRoot(LoginPage);
			}
			else if(response.error_code == 1)
			{
				this.registererror = response.msg;
			}
			else if(response.error_code == -1)
			{
				this.registererror = response.msg;
			}
		},error=>{
			console.log("error",error);
		}
		);
	}


}
