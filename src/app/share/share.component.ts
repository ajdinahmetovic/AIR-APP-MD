import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
