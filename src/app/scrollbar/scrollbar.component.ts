import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {

  rssFeed: Rss;

  url = 'src/assets/shape_white.svg'

  constructor(private http: HttpClient, private app: AppComponent) {
    this.rssFeed = app.rssFeed;

  }
  ngOnInit() {
  }

}
