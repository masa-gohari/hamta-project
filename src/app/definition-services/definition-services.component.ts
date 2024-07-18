import { Component, OnInit } from '@angular/core';
import { definitionServicesApi } from '../services/definition-services.service';
import { ToothDetailServicesComponent } from '../tooth-detail-services/tooth-detail-services.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicineConsumablesDetailServicesComponent } from '../medicine-consumables-detail-services/medicine-consumables-detail-services.component';

@Component({
  selector: 'app-definition-services',
  templateUrl: './definition-services.component.html',
  styleUrls: ['./definition-services.component.scss']
})

export class DefinitionServicesComponent implements OnInit {
  active = 'top';
  toothServiceList: Array<any>;
  medicineServiceList: Array<any>;
  dataListToothService: Array<any>;
  medicineListService: Array<any>;
  consumablesListService: Array<any>;
  medicineList: Array<any>;
  consumablesList: Array<any>;
  medicineAndconsumablesListService: any;
  modalInstance: any;

  constructor(private definitionServicesApi: definitionServicesApi, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.toothServices();
    this.tableDataListTooth();
    this.medicineServices();
    this.tableDataListMedicine();
  }

  toothServices() {
    this.definitionServicesApi.GetToothInfo().subscribe((q: any) => {
      this.toothServiceList = q.content;
    })
  }

  tableDataListTooth() {
    this.definitionServicesApi.GetMasterServiceList().subscribe((q: any) => {
      this.dataListToothService = q.content;
    })
  }
  medicineServices() {
    this.definitionServicesApi.GetMedicineInfo().subscribe((q: any) => {
      this.medicineServiceList = q.content;
    })
  }

  tableDataListMedicine() {
    this.definitionServicesApi.GetMedicineInfo().subscribe((q: any) => {
      this.medicineList = q.content[0].informationSchema;
      this.consumablesList= q.content[1].informationSchema;
      this.medicineAndconsumablesListService = this.medicineList.concat(this.consumablesList);
    })
  }

  showDetailTooth(i: number) {
    this.modalInstance = this.modalService.open(ToothDetailServicesComponent, { size: 'xl' });
  }
  
  addServiceTooth() {
    this.modalInstance = this.modalService.open(ToothDetailServicesComponent, { size: 'xl' });
  }
  
  editBtnTooth() {
    this.modalInstance = this.modalService.open(ToothDetailServicesComponent, { size: 'xl' });
  }

  editBtnMedicine() {
    this.modalInstance = this.modalService.open(MedicineConsumablesDetailServicesComponent, { size: 'xl' });
  }
  addServiceMedicine() {
    this.modalInstance = this.modalService.open(MedicineConsumablesDetailServicesComponent, { size: 'xl' });
  }
  
  showDetailMedicine(i: number) {
    this.modalInstance = this.modalService.open(MedicineConsumablesDetailServicesComponent, { size: 'xl' });
  }
}
