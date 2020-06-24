import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../../domain/services/storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public token:string;

  constructor(
    private storage:LocalStorage
  ) { }

  async ngOnInit() {
    this.token = await this.storage.getToken();
  }

}
