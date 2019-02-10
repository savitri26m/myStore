import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { SettingComponent } from './shared/setting/setting.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: 'settings', component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
