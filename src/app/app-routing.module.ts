import { Component, NgModule } from '@angular/core';
// eslint-disable-next-line sort-imports
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './home/insights/insights.component';
import { IssueDetailsComponent } from './home/issue-details/issue-details.component';

const routes: Routes = [
 {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'createProject' , component:CreateProjectComponent},
  {path:'home/issue-detail/:issue_id', component:IssueDetailsComponent},
  {path:'home/insights',component:InsightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
