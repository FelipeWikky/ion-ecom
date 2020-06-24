import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './../domain/model/user';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from './../domain/services/storage';
import { Router } from '@angular/router';

import { GlobalService } from './../domain/services/GlobalService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public user:User;
  public logged = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http:HttpClient,
    private router:Router,
    private storage:LocalStorage,
    public global:GlobalService
  ) {
    this.user = new User();
    this.initializeApp();
  }

  async isLogged():Promise<boolean> {
    const token:string = await this.storage.getToken();
    if (token && token != "") {
      return true;
    }
    return false;
  }

  async logout():Promise<void> {
    this.global.loginState = false;
    await this.storage.removeToken();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    const token:string = await this.storage.getToken();
    if (token && token != "") {
      this.global.login(token);
      this.router.navigate(['main'], {state:token as any});
    }
  }
}
