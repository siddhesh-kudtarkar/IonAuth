import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild("username") username;
  @ViewChild("password") password;
  @ViewChild("mobile") mobile;
  data: string;
  items: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController) {

  }

  createAlert(text: string) {
    const alert = this.alertCtrl.create({
      title: 'ATTENTION',
      subTitle: text + ' field is empty! Kindly fill the empty field to proceed.',
      buttons: ['OK']
    });
    alert.present();
  }

  signUp() {
    this.navCtrl.push(RegisterPage);
  }

  signIn() {
    if (this.username.value == "") {
      this.createAlert('Username');
    } 
    else if (this.password.value == "") {
      this.createAlert('Password');

    } 
    else if (this.mobile.value == "") {
      this.createAlert('Mobile Number');
    }
    else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({
        headers: headers
      });

      let data = {
        username: this.username.value,
        password: this.password.value,
        mobile: this.mobile.value
      };

      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {

        this.http.post('http://your.server-url.com/login.php', data, options)
          .map(res => res.json())
          .subscribe(res => {
            console.log(res)
            loader.dismiss()
            if (res == "Your login is successful.") {

              let alert = this.alertCtrl.create({
                title: "Congratulations",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.push(ProfilePage, data);
            } else {
              let alert = this.alertCtrl.create({
                title: "Error",
                subTitle: "Your login Username or Password or Mobile Number is invalid. If you are not a registered user, then register by clicking the 'REGISTER' button.",
                buttons: ['OK']
              });

              alert.present();
            }
          });
      });
    }

  }

  devInfo() {
    const alert = this.alertCtrl.create({
      title: 'About this web-app',
      subTitle: 'Developed using Ionic Framework by Siddhesh Kudtarkar as an internship assignment for Studyleague IT Solutions.',
      buttons: ['OK']
    });
    alert.present();
  }

}
