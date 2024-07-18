import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from '../settings/settings.component';
import { sharedApi } from '../services/shared.service';
import { PermisionsComponent } from '../permisions/permisions.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActiveDashboard: boolean;
  isActivePatientsList: boolean;
  isActiveDefinitionServices: boolean;
  isActiveDentists: boolean;
  isActiveStock: boolean;
  isActivePermission: boolean;
  modalInstance: any;
  todayDate: string;

  constructor(private router: Router, private modalService: NgbModal, private sharedApi: sharedApi) { }

  ngOnInit(): void {
    this.isActiveDashboard = true;
    this.router.navigate(['/navbar/dashboard']);
    this.getTodayDate()
  }

  getTodayDate() {
    this.sharedApi.todayDate().subscribe((q: any) => {
      this.todayDate = q.content.fDateNameJalali4;
    })
  }

  activeDashboard() {
    this.isActiveDashboard = true;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = false;
    this.isActivePermission = false;
  }

  activePatientsList() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = true;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = false;
    this.isActivePermission = false;
  }

  activeDefinitionServices() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = true;
    this.isActiveDentists = false;
    this.isActiveStock = false;
    this.isActivePermission = false;
  }

  activeDentists() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = true;
    this.isActiveStock = false;
    this.isActivePermission = false;
  }

  activeStock() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActivePermission = false;
    this.isActiveStock = true;
  }
  activePermission() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = false;
    this.isActivePermission = true;
  }

  openSetting() {
    this.modalInstance = this.modalService.open(SettingsComponent, { size: 'xl' });
  }
}
