import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarehouseDocumentsDetailComponent } from '../warehouse-documents-detail/warehouse-documents-detail.component';
import { CardexWarehouseDetailComponent } from '../cardex-warehouse-detail/cardex-warehouse-detail.component';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  active = 1;
  modalInstance: any;

  constructor(private modalService: NgbModal) { }

  detailCardexDoc(){
    this.modalInstance = this.modalService.open(CardexWarehouseDetailComponent, { size: 'xl' });
  }
  
  showDetailEntryDocument(){
    this.modalInstance = this.modalService.open(WarehouseDocumentsDetailComponent, { size: 'xl' });
  }

  showDetailOutputDocument(){
    this.modalInstance = this.modalService.open(WarehouseDocumentsDetailComponent, { size: 'xl' });
  }
}
