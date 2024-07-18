import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DefinitionServicesComponent } from './definition-services/definition-services.component';
import { DentistsComponent } from './dentists/dentists.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { PermisionsComponent } from './permisions/permisions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'navbar', component: NavbarComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'patientsList', component: PatientsListComponent},
      {path: 'definitionServices', component: DefinitionServicesComponent},
      {path: 'dentists', component: DentistsComponent},
      {path: 'Warehouse', component: WarehouseComponent},
      {path: 'permissions', component: PermisionsComponent},
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
