import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TodayComponent} from './today/today.component';
import {WeeklyComponent} from './weekly/weekly.component';
import {TipsComponent} from './tips/tips.component';

export const appRoutes: Routes = [
  {path: '', component: TodayComponent, pathMatch: 'full'},
  {path: 'today', component: TodayComponent},
  {path: 'weekly', component: WeeklyComponent},
  {path: 'tips', component: TipsComponent}
]
