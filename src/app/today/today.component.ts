import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxXml2jsonService} from 'ngx-xml2json';
import {Rss} from '../dataStruct/rss';
import {JsonConvert} from 'json2typescript';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {


  rssFeed: Rss ;

  constructor(private http: HttpClient, private parser: NgxXml2jsonService) {
  }

  ngOnInit() {
    this.rssFeed = new Rss(this.http);
  }


}
