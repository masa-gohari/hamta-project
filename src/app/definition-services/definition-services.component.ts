import { Component, OnInit } from '@angular/core';
import { definitionServicesApi } from '../services/definition-services.service';
import { ToothDetailServicesComponent } from '../tooth-detail-services/tooth-detail-services.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-definition-services',
  templateUrl: './definition-services.component.html',
  styleUrls: ['./definition-services.component.scss']
})

export class DefinitionServicesComponent implements OnInit {
  active = 'top';
  contents: Array<any>;
  dataList: Array<any>;
  modalInstance:any;

  constructor(private definitionServicesApi: definitionServicesApi,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.toothServices();
    this.tableDataList();
  }

  toothServices() {
    this.definitionServicesApi.GetToothInfo().subscribe((q: any) => {
      this.contents = q.content;
    })
  }

  tableDataList() {
    this.definitionServicesApi.GetMasterServiceList().subscribe((q: any) => {
      this.dataList = q.content;
    })
  }

  showDetail(i: number) {
    this.modalInstance = this.modalService.open(ToothDetailServicesComponent, { size: 'xl' });
  }
}
