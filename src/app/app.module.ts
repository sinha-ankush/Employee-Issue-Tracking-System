/* eslint-disable sort-imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// eslint-disable-next-line sort-imports
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

 import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { InsightsComponent } from './home/insights/insights.component';
import { IssueDetailsComponent } from './home/issue-details/issue-details.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { CreateIssuesComponent } from './create-project/create-issues.component';
// import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MainPageComponent,
    // NavbarComponent,
    // CreateIssuesComponent,
    // SignupComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    CreateProjectComponent,
    InsightsComponent,
    IssueDetailsComponent,
    //MatSidenavModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    // Material imports
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule

  ],
  // exports:[ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
