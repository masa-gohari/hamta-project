import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  active = 'one';
  isDefinitionBasicInfo: boolean;
  isSms: boolean;
  isInsurance: boolean;

  ngOnInit(): void {
    this.isDefinitionBasicInfo = true;
  }

  activeDefinitionBasicInfo() {
    this.isDefinitionBasicInfo = true;
    this.isSms = false;
    this.isInsurance = false;
  }
  activeSms() {
    this.isDefinitionBasicInfo = false;
    this.isSms = true;
    this.isInsurance = false;
  }
  activeInsurance() {
    this.isDefinitionBasicInfo = false;
    this.isSms = false;
    this.isInsurance = true;
  }
}
