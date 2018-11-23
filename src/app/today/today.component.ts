import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
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
