import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { patientsApi } from '../services/patient.service';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api-services.service';
import { EstelamModel } from '../models/login.model';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})

export class PatientsListComponent implements OnInit {
  @ViewChild('patient') patient: TemplateRef<any>;
  patientList: Array<any>;
  patientWithNationalCode: Array<any>;
  nationalCode: string;
  nationalCodeForEstelam: string;
  dateValueBirth = new FormControl();
  dateValueBirthDay = new FormControl();
  birthDate: string;
  valueBirthDate: string;
  genderIdSelected: number;
  birthDateShamsi:string;
  createDateShamsi:string;
  genderList: Array<any> = [
    { id: 1, name: 'مرد' },
    { id: 2, name: 'زن' }
  ];
  constructor(private modalService: NgbModal, private patientsService: patientsApi,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getListPatient()
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  getListPatient() {
    this.patientsService.PatientList().subscribe((q: any) => {
      this.patientList = q.content;
    })
  }

  openFormPatient(patient: any) {
    this.modalService.open(this.patient, { size: 'xl' });
  }

  getPatientWithNationalCode() {
    this.patientsService.GetPatientByNationalCode(this.nationalCode).subscribe((q: any) => {
      this.patientWithNationalCode = q.content;
      console.log(q.content)
      if(this.patientWithNationalCode.length != 0){
        this.openFormPatient(this.patient)
        
      }
    })
    // if (patientByNAtionalCode.length == 0) {
    //   this.openFormPatient(this.patient)
    // }

  }
  onSelectDateFrom(event: any) {
    this.birthDate = this.dateValueBirth.value;
  }
  onChangeEvent(event: any) { };


  openEstelam(birthDate: any) {
    this.modalService.open(birthDate);
    var estelamModel = new EstelamModel();
    estelamModel.nationalCode = this.nationalCode;
    estelamModel.key='127'
    this.apiService.GetEstelam(estelamModel).subscribe((q: any) => {
      console.log(q)
    })
  }

  onSelectDatefromBirth(event: any) {
    this.valueBirthDate = this.dateValueBirthDay.value;
  }

  onChangeEventBirth(event: any) { };

}
