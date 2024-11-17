import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { patientsApi } from '../services/patient.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api-services.service';
import { EstelamModel } from '../models/login.model';
import { InsertPatientModel, UpdatePatientModel } from '../models/patient.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})

export class PatientsListComponent implements OnInit {
  @ViewChild('patient') patient: TemplateRef<any>;
  @ViewChild('editPatient') editPatient: TemplateRef<any>;
  @ViewChild('estelamModal') estelamModal: TemplateRef<any>;

  form: FormGroup;
  formEdit: FormGroup;
  patientList: Array<any>;
  patientWithNationalCode: Array<any>;
  nationalCode: string;
  nationalCodeForEstelam: string;
  dateValueBirthDate = new FormControl();
  valueBirthDate: string;
  selectedBirthDate: string;
  selectedCreateDate: string;
  genderIdSelected: number;
  provinceCodeSelected: number;
  countyCodeSelected: number;
  selectedRow: any;
  isChangedGender: boolean = false;
  isChangedProvince: boolean = false;
  isChangedCounty: boolean = false;
  genderList: Array<any> = [
    { id: 1, name: 'مرد' },
    { id: 2, name: 'زن' }
  ];
  provinceList: Array<any>;
  countyList: Array<any>;

  constructor(
    private modalService: NgbModal,
    private patientsService: patientsApi,
    private apiService: ApiService,
    config: NgbModalConfig,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.buildForm()
  }

  ngOnInit(): void {
    this.getListPatient();
    this.getListProvince();
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  getListPatient() {
    this.patientsService.PatientList().subscribe((q: any) => {
      this.patientList = q.content;
    })
  }

  onChangeProvince(event: any) {
    this.isChangedProvince = true;
    this.provinceCodeSelected = event.target.value;
    this.getListCounty()
  }

  onChangeCounty(event: any) {
    this.isChangedCounty = true;
    this.countyCodeSelected = event.target.value;
  }

  onChangeGender(event: any) {
    this.isChangedGender = true;
    this.genderIdSelected = event.target.value;
  }

  getListProvince() {
    this.apiService.GetProvince().subscribe((q: any) => {
      this.provinceList = q.content;
    })
  }

  getListCounty() {
    this.apiService.GetCounty(0, this.provinceCodeSelected).subscribe((q: any) => {
      this.countyList = q.content;
    })
  }

  openFormPatient(patient: any) {
    this.modalService.open(this.patient, { size: 'xl' });
  }

  getPatientWithNationalCode() {
    this.patientsService.GetPatientByNationalCode(this.nationalCode).subscribe((q: any) => {
      this.patientWithNationalCode = q.content;
      if (this.patientWithNationalCode != null) {
        this.openFormPatient(this.patient)
      } else {
        this.openEstelam(this.estelamModal)
      }
    })
  }

  onSelectReceptionDate(event: any) {
    this.selectedCreateDate = event.shamsi;
  }

  onSelectBirthDate(event: any) {
    this.selectedBirthDate = event.shamsi;
  }

  onSelectDateBirth(event: any) {
    this.valueBirthDate = this.dateValueBirthDate.value;
  }

  openEstelam(estelam: any) {
    this.modalService.open(this.estelamModal);
  }

  submitEstelam() {
    var estelamModel = new EstelamModel();
    estelamModel.nationalCode = this.nationalCode;
    estelamModel.key = '127'
    this.apiService.GetEstelam(estelamModel).subscribe((q: any) => {
      if (q.result == true) {
        this.openFormPatient(this.patient)
      }
    })
  }

  clearDate() {
    this.dateValueBirthDate.reset()
  }

  clearNationalCode() {
    this.nationalCode = ''
  }

  buildForm() {
    this.form = this.fb.group({
      patientID: [],
      id: [],
      isActive: [],
      firstName: [],
      lastName: [],
      fatherName: [],
      nationalCode: [],
      birthDate: [],
      mobileNumber: [],
      genderIx: [],
      isSitizen: [],
      provinceIx: [],
      cityIx: [],
      insuranceID: [],
      email: [],
      description: [],
      createDate: [],
      isRegistry: [],
      address: [],
    });
  }
  buildEditForm() {
    this.formEdit = this.fb.group({
      patientID: [],
      id: [],
      isActive: [],
      firstName: [],
      lastName: [],
      fatherName: [],
      nationalCode: [],
      birthDate: [],
      mobileNumber: [],
      genderIx: [],
      isSitizen: [],
      provinceIx: [],
      cityIx: [],
      insuranceID: [],
      email: [],
      description: [],
      createDate: [],
      isRegistry: [],
      address: [],
    });
  }

  get f() { return this.form.controls; }

  initial() {
    this.buildForm();
  }

  createNewPatient() {
    var insertPatient = new InsertPatientModel();
    insertPatient.firstName = this.form.value.firstName;
    insertPatient.lastName = this.form.value.lastName;
    insertPatient.fatherName = this.form.value.fatherName;
    insertPatient.nationalCode = this.form.value.nationalCode;
    insertPatient.birthDate = this.selectedBirthDate;
    insertPatient.mobileNumber = this.form.value.mobileNumber;
    insertPatient.genderIx = +this.genderIdSelected;
    insertPatient.isSitizen = false;
    insertPatient.isActive = false;
    insertPatient.provinceIx = +this.provinceCodeSelected;
    insertPatient.cityIx = +this.countyCodeSelected;
    insertPatient.insuranceID = this.form.value.insuranceID;
    insertPatient.description = this.form.value.description;
    insertPatient.email = this.form.value.email;
    insertPatient.createDate = this.selectedCreateDate;
    insertPatient.isRegistry = false;
    insertPatient.address = this.form.value.address;
    this.patientsService.InsertNewPatient(insertPatient).subscribe((q: any) => {
      if (q.result == true) {
        this.toastr.success('عملیات با موفقیت انجام شد');
        this.modalService.dismissAll();
        this.initial()
        this.getListPatient()
      } else {
        this.toastr.error(q.errorMessages);
      }
    })
  }
  openEditForm(selectedRow: any) {
    this.selectedRow = selectedRow
    this.apiService.GetCounty(0, selectedRow.provinceIx).subscribe((q: any) => {
      this.countyList = q.content;
    })
    this.modalService.open(this.editPatient, { size: 'xl' });
    this.formEdit = this.fb.group({
      firstName: [selectedRow.firstName],
      lastName: [selectedRow.lastName],
      fatherName: [selectedRow.fatherName],
      nationalCode: [selectedRow.nationalCode],
      birthDate: [selectedRow.birthDateShamsi],
      mobileNumber: [selectedRow.mobileNumber],
      genderIx: [selectedRow.genderIx],
      isSitizen: [selectedRow.isSitizen],
      provinceIx: [selectedRow.provinceIx],
      cityIx: [selectedRow.cityIx],
      insuranceID: [selectedRow.insuranceID],
      email: [selectedRow.email],
      description: [selectedRow.description],
      createDate: [selectedRow.createDateShamsi],
      isRegistry: [selectedRow.isRegistry],
      address: [selectedRow.address],
    });
  }

  saveEditPatient() {
    var updatePatient = new UpdatePatientModel();
    updatePatient.firstName = this.formEdit.value.firstName;
    updatePatient.lastName = this.formEdit.value.lastName;
    updatePatient.fatherName = this.formEdit.value.fatherName;
    updatePatient.nationalCode = this.formEdit.value.nationalCode;
    updatePatient.birthDate = this.selectedBirthDate;
    updatePatient.mobileNumber = this.formEdit.value.mobileNumber;
    if (this.isChangedGender == true) {
      updatePatient.genderIx = +this.genderIdSelected;
    } else {
      updatePatient.genderIx = this.selectedRow.genderIx;
    }
    if (this.isChangedProvince == true) {
      updatePatient.genderIx = +this.provinceCodeSelected;
    } else {
      updatePatient.genderIx = this.selectedRow.provinceIx;
    }
    if (this.isChangedCounty == true) {
      updatePatient.genderIx = +this.countyCodeSelected;
    } else {
      updatePatient.genderIx = this.selectedRow.cityIx;
    }
    updatePatient.isSitizen = false;
    updatePatient.isActive = false;
    updatePatient.insuranceID = this.formEdit.value.insuranceID;
    updatePatient.description = this.formEdit.value.description;
    updatePatient.email = this.formEdit.value.email;
    updatePatient.createDate = this.selectedCreateDate;
    updatePatient.isRegistry = false;
    updatePatient.address = this.formEdit.value.address;
    this.patientsService.UpdatePatient(updatePatient).subscribe((q: any) => {
      if (q.result == true) {
        this.toastr.success('عملیات با موفقیت انجام شد');
        this.modalService.dismissAll();
        this.initial()
        this.getListPatient()
      } else {
        this.toastr.error(q.errorMessages);
      }
    })
  }

}
