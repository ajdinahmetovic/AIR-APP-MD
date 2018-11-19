import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxXml2jsonService} from 'ngx-xml2json';
import {Rss} from '../dataStruct/rss';
import {JsonConvert} from 'json2typescript';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {MatBottomSheet} from '@angular/material';
import {ShareComponent} from '../share/share.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {



  date: Date = new Date();


  rssFeed: Rss ;

  constructor(private bottomSheet: MatBottomSheet, private app: AppComponent) {
    this.rssFeed = app.rssFeed;
  }

  ngOnInit() {
  }

  openShareDialog() {
     this.bottomSheet.open(ShareComponent);

  }


}
