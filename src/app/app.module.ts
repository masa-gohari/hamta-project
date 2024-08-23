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
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbAccordionModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ToothDetailServicesComponent } from './tooth-detail-services/tooth-detail-services.component';
import { MedicineConsumablesDetailServicesComponent } from './medicine-consumables-detail-services/medicine-consumables-detail-services.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseDocumentsDetailComponent } from './warehouse-documents-detail/warehouse-documents-detail.component';
import { CardexWarehouseDetailComponent } from './cardex-warehouse-detail/cardex-warehouse-detail.component';
import { PermisionsComponent } from './permisions/permisions.component';
import { ApiService } from './services/api-services.service';
import { IdentityService } from './services/identity.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    PatientsListComponent,
    DefinitionServicesComponent,
    DentistsComponent,
    SettingsComponent,
    ToothDetailServicesComponent,
    MedicineConsumablesDetailServicesComponent,
    WarehouseComponent,
    WarehouseDocumentsDetailComponent,
    CardexWarehouseDetailComponent,
    PermisionsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    NgPersianDatepickerModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-left' }),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [ApiService,IdentityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
