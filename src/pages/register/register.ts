import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public bday_DayArray = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }, { value: '16' }, { value: '17' }, { value: '18' }, { value: '20' }, { value: '20' }, { value: '21' }, { value: '22' }, { value: '23' }, { value: '24' }, { value: '25' }, { value: '26' }, { value: '27' }, { value: '28' }, { value: '29' }, { value: '30' }, { value: '31' }];

  public bday_MonthArray = [{ value: 'January' }, { value: 'February' }, { value: 'March' }, { value: 'April' }, { value: 'May' }, { value: 'June' }, { value: 'July' }, { value: 'August' }, { value: 'September' }, { value: 'October' }, { value: 'November' }, { value: 'December' }];

  public bday_YearArray = [{ value: '1930' }, { value: '1931' }, { value: '1932' }, { value: '1933' }, { value: '1934' }, { value: '1935' }, { value: '1936' }, { value: '1937' }, { value: '1938' }, { value: '1939' }, { value: '1940' }, { value: '1941' }, { value: '1942' }, { value: '1943' }, { value: '1944' }, { value: '1945' }, { value: '1946' }, { value: '1947' }, { value: '1948' }, { value: '1949' }, { value: '1950' }, { value: '1951' }, { value: '1952' }, { value: '1953' }, { value: '1954' }, { value: '1955' }, { value: '1956' }, { value: '1957' }, { value: '1958' }, { value: '1959' }, { value: '1960' }, { value: '1961' }, { value: '1962' }, { value: '1963' }, { value: '1964' }, { value: '1965' }, { value: '1966' }, { value: '1967' }, { value: '1968' }, { value: '1969' }, { value: '1970' }, { value: '1971' }, { value: '1972' }, { value: '1973' }, { value: '1974' }, { value: '1975' }, { value: '1976' }, { value: '1977' }, { value: '1978' }, { value: '1979' }, { value: '1980' }, { value: '1981' }, { value: '1982' }, { value: '1983' }, { value: '1984' }, { value: '1985' }, { value: '1986' }, { value: '1987' }, { value: '1988' }, { value: '1989' }, { value: '1990' }, { value: '1991' }, { value: '1992' }, { value: '1993' }, { value: '1994' }, { value: '1995' }, { value: '1996' }, { value: '1997' }, { value: '1998' }, { value: '1999' }, { value: '2000' }, { value: '2001' }, { value: '2002' }, { value: '2003' }, { value: '2004' }, { value: '2005' }, { value: '2006' }, { value: '2007' }, { value: '2008' }, { value: '2009' }, { value: '2010' }, { value: '2011' }, { value: '2012' }, { value: '2013' }, { value: '2014' }, { value: '2015' }, { value: '2016' }, { value: '2017' }, { value: '2018' }, { value: '2019' }];

  @ViewChild("name") name;
  @ViewChild("username") username;
  @ViewChild("mobile") mobile;
  @ViewChild("password") password;
  @ViewChild("Male") Male;
  @ViewChild("Female") Female;
  @ViewChild("Other") Other;

  gender: any;
  bday_Day: any;
  bday_Month: any;
  bday_Year: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: Http, public loading: LoadingController, public toastCtrl: ToastController) {
    this.gender = 'Male';
    this.bday_Day = '1';
    this.bday_Month = 'March';
    this.bday_Year = '1985';
  }

  createAlert(text: any) {
    const alert = this.alertCtrl.create({
      title: "ATTENTION",
      subTitle: text + " field is empty! Kindly fill the empty field.",
      buttons: ['OK']
    });
    alert.present();
  }

  register() {
    if (this.username.value == "") {
      this.createAlert('Username');
    }
    else if (this.name.value == "") {
      this.createAlert('Name');
    }
    else if (this.mobile.value == "") {
      this.createAlert('Mobile Number');
    }
    else if (this.password.value == "") {
      this.createAlert('Password');
    }
    else if (this.gender == "") {
      this.createAlert('Gender');
    }
    else if (this.bday_Day == "") {
      this.createAlert('Birth Day');
    }
    else if (this.bday_Month == "") {
      this.createAlert('Birth Month');
    }
    else if (this.bday_Year == "") {
      this.createAlert('Birth Year');
    }
    else {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });

      let data = {
        username: this.username.value,
        password: this.password.value,
        name: this.name.value,
        mobile: this.mobile.value,
        gender: this.gender,
        bday_Day: this.bday_Day,
        bday_Month: this.bday_Month,
        bday_Year: this.bday_Year
      };


      let loader = this.loading.create({
        content: 'Processing please wait...',
      });

      loader.present().then(() => {
        this.http.post('http://sidsk99.heliohost.org/register.php', data, options)
          .map(res => res.json())
          .subscribe(res => {

            loader.dismiss()
            if (res == "Registration successful") {
              let alert = this.alertCtrl.create({
                title: "Congratulations",
                subTitle: (res),
                buttons: ['OK']
              });

              alert.present();
              this.navCtrl.push(HomePage);
              this.navCtrl.setRoot(HomePage);
              const toast = this.toastCtrl.create({
                message: 'Now, sign in with your login credentials',
                duration: 3000,
              });
              toast.present();
            } else {
              let alert = this.alertCtrl.create({
                title: "Congratulations",
                subTitle: (res),
                buttons: ['OK']
              });
              alert.present();
              this.navCtrl.push(HomePage);
              this.navCtrl.setRoot(HomePage);
              const toast = this.toastCtrl.create({
                message: 'Now, sign in with your login credentials',
                duration: 3000,
              });
              toast.present();
            }
          });
      });
    }

  }
}