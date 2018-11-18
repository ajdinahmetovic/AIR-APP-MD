import {Component, Input, OnInit} from '@angular/core';
import {Rss} from '../dataStruct/rss';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() rssFeed: Rss;
  constructor() {
    // this.rssFeed = new Rss(this.http);

  }

  ngOnInit() {
  }

}
