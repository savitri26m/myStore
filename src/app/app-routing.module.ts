import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { SettingsComponent } from './shared/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
