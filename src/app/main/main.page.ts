import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../../domain/services/storage';
import { GlobalService } from './../../domain/services/GlobalService';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public token:string;

  constructor(
    private storage:LocalStorage,
    public global:GlobalService,
  ) { }

  async ngOnInit() {
    this.token = this.global.token;
  }

}
