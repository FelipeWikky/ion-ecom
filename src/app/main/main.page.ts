import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../../domain/services/storage';
import { GlobalService } from './../../domain/services/GlobalService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public token:string;

  constructor(
    private router:Router,
    private http:HttpClient,
    private storage:LocalStorage,
    public global:GlobalService,
  ) { }

  async ngOnInit() {
    // this.http.get(`http://example-ecommerce.herokuapp.com/user/logged`, 
    //   {
    //     responseType:'text',
    //     headers:{
    //       Authorization: 'Bearer ' + this.global.getToken()
    //     }
    //   })
    //   .subscribe((data:string) => {
    //     this.global.setEmail(data);
    //     console.log('username requested ' + data);
    //   });
  }

}
