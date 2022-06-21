import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { ScienceComponent } from './science/science.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'sport',component:SportnewsComponent},
  {path:'health',component:HealthnewsComponent},
  {path:'science',component:ScienceComponent},
  {path:'business',component:BusinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }