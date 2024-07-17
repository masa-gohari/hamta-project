import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DefinitionServicesComponent } from './definition-services/definition-services.component';
import { DentistsComponent } from './dentists/dentists.component';
import { StockComponent } from './stock/stock.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbAccordionModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ToothDetailServicesComponent } from './tooth-detail-services/tooth-detail-services.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    PatientsListComponent,
    DefinitionServicesComponent,
    DentistsComponent,
    StockComponent,
    SettingsComponent,
    ToothDetailServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    NgbAccordionModule,
    CdkAccordionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
