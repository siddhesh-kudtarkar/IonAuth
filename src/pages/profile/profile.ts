import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  data: any;
  username: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public loading: LoadingController, public toastCtrl: ToastController) {}

  ngOnInit() {
    this.username = this.navParams.get('username');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
      username: this.username
    };

    let loader = this.loading.create({
      content: 'Processing please wait...',
    });

    loader.present().then(() => {
      this.http.post('http://your.server-url.com/fetch_data.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          loader.dismiss()
          this.items = res.server_response;
          console.log(this.items);
        });
    });
    const toast = this.toastCtrl.create({
      message: 'Welcome ' + this.username,
      duration: 3000
    });
    toast.present();
  }

  logOut() {
    this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
  }
}
