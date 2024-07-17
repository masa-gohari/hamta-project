import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from '../settings/settings.component';

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
  modalInstance:any;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.isActiveDashboard = true;
    this.router.navigate(['/navbar/dashboard']);
  }

  activeDashboard() {
    this.isActiveDashboard = true;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = false;
  }

  activePatientsList() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = true;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = false;
  }

  activeDefinitionServices() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = true;
    this.isActiveDentists = false;
    this.isActiveStock = false;
  }

  activeDentists() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = true;
    this.isActiveStock = false;
  }

  activeStock() {
    this.isActiveDashboard = false;
    this.isActivePatientsList = false;
    this.isActiveDefinitionServices = false;
    this.isActiveDentists = false;
    this.isActiveStock = true;
  }

  openSetting() {
    this.modalInstance = this.modalService.open(SettingsComponent, { size: 'xl' });
  }

}
