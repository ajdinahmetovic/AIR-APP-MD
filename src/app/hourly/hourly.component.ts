import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {


  rssFeed: Rss;

  constructor(private http: HttpClient, private app: AppComponent) {
    this.rssFeed = app.rssFeed;

  }

  ngOnInit() {
  }

}
