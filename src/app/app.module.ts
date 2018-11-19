import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { TodayComponent } from './today/today.component';
import { TipsComponent } from './tips/tips.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {MatBottomSheetModule, MatGridListModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HourlyComponent } from './hourly/hourly.component';
import {SwipeDirective} from './swipeDirective';
import { ShareComponent } from './share/share.component';



@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    TipsComponent,
    HeaderComponent,
    NavComponent,
    HourlyComponent,
    SwipeDirective,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    ShareComponent
  ],

 exports: [
   BrowserAnimationsModule,
   MatTabsModule,

 ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
