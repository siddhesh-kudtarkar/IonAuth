webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, http, loading, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.navParams.get('username');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var data = {
            username: this.username
        };
        var loader = this.loading.create({
            content: 'Processing please wait...',
        });
        loader.present().then(function () {
            _this.http.post('http://sidsk99.heliohost.org/fetch_data.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                _this.items = res.server_response;
                console.log(_this.items);
            });
        });
        var toast = this.toastCtrl.create({
            message: 'Welcome ' + this.username,
            duration: 3000
        });
        toast.present();
    };
    ProfilePage.prototype.logOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/sisk/Desktop/ionAuth/src/pages/profile/profile.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/bg.jpg\'); background-size: cover;" class="fontChange w3-mobile">\n\n  <ion-item *ngFor="let item of items" class="fontChange" style="background-color: transparent;">\n    <h2 class="fontChange">Welcome <b>{{item.name}}</b></h2>\n    <h3 class="fontChange">Your profile information is as follows:</h3>\n    <ion-row>\n        <b>Username:</b>\n    </ion-row>\n    <ion-row>\n        {{item.username}}\n    </ion-row>\n    <ion-row>\n       <b>Mobile Number:</b>\n    </ion-row>\n    <ion-row>\n        {{item.mobile}}\n    </ion-row>\n    <ion-row>\n        <b>Gender:</b>\n    </ion-row>\n    <ion-row>\n        {{item.gender}}\n    </ion-row>\n    <ion-row>\n        <b>Birthdate:</b>\n    </ion-row>\n    <ion-row>\n        {{item.bday_Day}} {{item.bday_Month}}, {{item.bday_Year}}\n    </ion-row>\n  </ion-item>\n  <button ion-button block color="dark" (click)="logOut()">LOGOUT</button>\n</ion-content>'/*ion-inline-end:"/home/sisk/Desktop/ionAuth/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl, http, loading, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.bday_DayArray = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }, { value: '16' }, { value: '17' }, { value: '18' }, { value: '20' }, { value: '20' }, { value: '21' }, { value: '22' }, { value: '23' }, { value: '24' }, { value: '25' }, { value: '26' }, { value: '27' }, { value: '28' }, { value: '29' }, { value: '30' }, { value: '31' }];
        this.bday_MonthArray = [{ value: 'January' }, { value: 'February' }, { value: 'March' }, { value: 'April' }, { value: 'May' }, { value: 'June' }, { value: 'July' }, { value: 'August' }, { value: 'September' }, { value: 'October' }, { value: 'November' }, { value: 'December' }];
        this.bday_YearArray = [{ value: '1930' }, { value: '1931' }, { value: '1932' }, { value: '1933' }, { value: '1934' }, { value: '1935' }, { value: '1936' }, { value: '1937' }, { value: '1938' }, { value: '1939' }, { value: '1940' }, { value: '1941' }, { value: '1942' }, { value: '1943' }, { value: '1944' }, { value: '1945' }, { value: '1946' }, { value: '1947' }, { value: '1948' }, { value: '1949' }, { value: '1950' }, { value: '1951' }, { value: '1952' }, { value: '1953' }, { value: '1954' }, { value: '1955' }, { value: '1956' }, { value: '1957' }, { value: '1958' }, { value: '1959' }, { value: '1960' }, { value: '1961' }, { value: '1962' }, { value: '1963' }, { value: '1964' }, { value: '1965' }, { value: '1966' }, { value: '1967' }, { value: '1968' }, { value: '1969' }, { value: '1970' }, { value: '1971' }, { value: '1972' }, { value: '1973' }, { value: '1974' }, { value: '1975' }, { value: '1976' }, { value: '1977' }, { value: '1978' }, { value: '1979' }, { value: '1980' }, { value: '1981' }, { value: '1982' }, { value: '1983' }, { value: '1984' }, { value: '1985' }, { value: '1986' }, { value: '1987' }, { value: '1988' }, { value: '1989' }, { value: '1990' }, { value: '1991' }, { value: '1992' }, { value: '1993' }, { value: '1994' }, { value: '1995' }, { value: '1996' }, { value: '1997' }, { value: '1998' }, { value: '1999' }, { value: '2000' }, { value: '2001' }, { value: '2002' }, { value: '2003' }, { value: '2004' }, { value: '2005' }, { value: '2006' }, { value: '2007' }, { value: '2008' }, { value: '2009' }, { value: '2010' }, { value: '2011' }, { value: '2012' }, { value: '2013' }, { value: '2014' }, { value: '2015' }, { value: '2016' }, { value: '2017' }, { value: '2018' }, { value: '2019' }];
        this.gender = 'Male';
        this.bday_Day = '1';
        this.bday_Month = 'March';
        this.bday_Year = '1985';
    }
    RegisterPage.prototype.createAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: "ATTENTION",
            subTitle: text + " field is empty! Kindly fill the empty field.",
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
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
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                name: this.name.value,
                mobile: this.mobile.value,
                gender: this.gender,
                bday_Day: this.bday_Day,
                bday_Month: this.bday_Month,
                bday_Year: this.bday_Year
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://sidsk99.heliohost.org/register.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    loader_1.dismiss();
                    if (res == "Registration successful") {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Congratulations",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        var toast = _this.toastCtrl.create({
                            message: 'Now, sign in with your login credentials',
                            duration: 3000,
                        });
                        toast.present();
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Congratulations",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        var toast = _this.toastCtrl.create({
                            message: 'Now, sign in with your login credentials',
                            duration: 3000,
                        });
                        toast.present();
                    }
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("name"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Male"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "Male", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Female"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "Female", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("Other"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "Other", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/sisk/Desktop/ionAuth/src/pages/register/register.html"*/'<ion-content padding class="fontChange" style="background-image: url(\'assets/imgs/bg.jpg\'); background-size: cover;">\n\n  <img src="assets/imgs/logo.png" class="centerImage w3css" style="width: 135px; height: 135px;" alt="Logo"><br>\n\n  <div style="text-align: left;" class="w3-xlarge"><b>Sign Up</b></div>\n\n  <div style="text-align: left;" class="w3-large">Enter your details to sign-up</div><br>\n\n  <ion-input class="textInputConfig w3-medium w3-border w3-border-black roundBorder" type="text"\n    placeholder="Name" name="name" #name></ion-input><br>\n\n  <ion-input class="textInputConfig w3-medium w3-border w3-border-black roundBorder" type="text" placeholder="Username" name="username" #username></ion-input><br>\n\n  <ion-input class="textInputConfig w3-medium w3-border w3-border-black roundBorder" type="text"\n    placeholder="Mobile Number (10-digit)" name="mobile" #mobile pattern="[789][0-9]{9}" maxlength="10"></ion-input><br>\n\n  <ion-input class="textInputConfig w3-medium w3-border w3-border-black roundBorder" type="password"\n    placeholder="Password" name="password" #password></ion-input><br>\n\n  <ion-grid>\n    <ion-list radio-group [(ngModel)]="gender">\n      <ion-row>\n        <ion-col col-3>\n          <ion-label class="w3-small" style="display: inline;"><b>Gender:</b></ion-label>\n        </ion-col>\n        <ion-col col-3>\n          <ion-radio class="w3-radio w3-border-black" color="dark" value="Male" #male></ion-radio>\n          <div class="w3-small w3-label" style="display: inline;">Male</div>\n        </ion-col>\n        <ion-col col-3>\n          <ion-radio class="w3-radio w3-border-black" color="dark" value="Female" #female></ion-radio>\n          <div class="w3-small w3-label" style="display: inline;">Female</div>\n        </ion-col>\n        <ion-col col-3>\n          <ion-radio class="w3-radio w3-border-black" color="dark" value="Other" #other></ion-radio>\n          <div class="w3-small w3-label" style="display: inline;">Other</div>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n\n  <div style="font-size: 14px;"><b>Birthday:</b></div>\n  <ion-grid style="font-size: 14px; display: inline;">\n    <ion-row>\n      <ion-col col-4>\n        <ion-select style="background-color: transparent; color: black" class="w3-select w3-border-black" [(ngModel)]="bday_Day">\n          <ion-option *ngFor="let date of bday_DayArray" value="{{date.value}}">\n            {{ date.value }}\n          </ion-option>\n        </ion-select>\n      </ion-col>\n      <ion-col col-4>\n        <ion-select style="background-color: transparent;" class="w3-select w3-border-black" [(ngModel)]="bday_Month">\n          <ion-option *ngFor="let month of bday_MonthArray" value="{{month.value}}">\n            {{ month.value }}\n          </ion-option>\n        </ion-select>\n      </ion-col>\n      <ion-col col-4>\n        <ion-select style="background-color: transparent;" class="w3-select w3-border-black" [(ngModel)]="bday_Year">\n          <ion-option *ngFor="let year of bday_YearArray" value="{{year.value}}">\n            {{ year.value }}\n          </ion-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="w3-medium" style="color: black;">By clicking <b>Sign Up</b>, you hereby agree to our Terms & Data Policy.</div>\n\n  <div padding>\n    <button style="background-color: black; color: white;" ion-button block (click)="register()"><b>SIGN UP</b></button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/sisk/Desktop/ionAuth/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sisk/Desktop/ionAuth/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sisk/Desktop/ionAuth/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, http, loading) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
    }
    HomePage.prototype.createAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'ATTENTION',
            subTitle: text + ' field is empty! Kindly fill the empty field to proceed.',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.signIn = function () {
        var _this = this;
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
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var data_1 = {
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value
            };
            var loader_1 = this.loading.create({
                content: 'Processing please wait...',
            });
            loader_1.present().then(function () {
                _this.http.post('http://sidsk99.heliohost.org/login.php', data_1, options_1)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log(res);
                    loader_1.dismiss();
                    if (res == "Your login is successful.") {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Congratulations",
                            subTitle: (res),
                            buttons: ['OK']
                        });
                        alert_1.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], data_1);
                    }
                    else {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Error",
                            subTitle: "Your login Username or Password or Mobile Number is invalid. If you are not a registered user, then register by clicking the 'REGISTER' button.",
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                });
            });
        }
    };
    HomePage.prototype.devInfo = function () {
        var alert = this.alertCtrl.create({
            title: 'About this web-app',
            subTitle: 'Developed using Ionic Framework by Siddhesh Kudtarkar as an internship assignment for Studyleague IT Solutions.',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("mobile"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "mobile", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sisk/Desktop/ionAuth/src/pages/home/home.html"*/'<ion-content padding style="background-image: url(\'assets/imgs/bg.jpg\'); background-size: cover;" class="fontChange w3-mobile">\n  <img src="assets/imgs/logo.png" class="centerImage w3css" style="width: 135px; height: 135px;" alt="Logo"><br>\n\n  <div style="text-align: left;" class="w3-xlarge"><b>Log In</b></div>\n\n  <div style="text-align: left;" class="w3-large">Enter your details to sign-in</div><br>\n  \n      <ion-input type="text" class="textInputConfig phColor w3-medium w3-border w3-border-black roundBorder" placeholder="Username" name="username" #username></ion-input><br>\n\n      <ion-input type="text" class="textInputConfig w3-medium w3-border w3-border-black roundBorder" placeholder="Mobile Number (10-digit)" name="mobile" pattern="[789][0-9]{9}" maxlength="10" #mobile></ion-input><br>\n\n      <ion-input type="password" class="textInputConfig w3-medium w3-border w3-border-black roundBorder" placeholder="Password" name="password" #password></ion-input><br>\n\n    <button style="background-color: black; color: white;" ion-button block (click)="signIn()"><b>LOGIN</b></button>\n\n    <div class="w3-medium" style="color: black;">Don\'t have an account? <b (click)="signUp()">Sign Up</b> here.</div>\n\n    <p (click)="devInfo()" class="w3-medium" style="color: black;">Short info about this app</p>\n\n    <div style="padding: 50px;"></div>\n</ion-content>\n'/*ion-inline-end:"/home/sisk/Desktop/ionAuth/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map