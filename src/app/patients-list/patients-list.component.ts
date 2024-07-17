import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { patientsApi } from '../services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})

export class PatientsListComponent implements OnInit {
  patientList: Array<any>

  constructor(private modalService: NgbModal, private patients: patientsApi) { }

  ngOnInit(): void {
    this.getListPatient()
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  getListPatient() {
    this.patients.PatientList().subscribe((q: any) => {
      this.patientList = q.content;
    })
  }
}
