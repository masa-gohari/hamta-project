import { Component } from '@angular/core';

@Component({
  selector: 'app-medicine-consumables-detail-services',
  templateUrl: './medicine-consumables-detail-services.component.html',
  styleUrls: ['./medicine-consumables-detail-services.component.scss']
})
export class MedicineConsumablesDetailServicesComponent {
  active = 1;
  isExceptionInsurance: boolean = false;

  checkedExceptionInsurance(){
    this.isExceptionInsurance =! this.isExceptionInsurance;
  }
}
