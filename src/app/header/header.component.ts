import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    rssFeed: Rss;
  constructor(private http: HttpClient) {
    this.rssFeed = new Rss(this.http);

  }

  ngOnInit() {
  }

}
