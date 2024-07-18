import { Component, OnInit } from '@angular/core';
import { permissionApi } from '../services/permission.service';
import { ModalDismissReasons, NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permisions',
  templateUrl: './permisions.component.html',
  styleUrls: ['./permisions.component.scss']
})
export class PermisionsComponent implements OnInit {
  permissionGpList: Array<any>
  constructor(private permissionApi: permissionApi,private modalService: NgbModal,private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    this.getPermissionList()
  }

  getPermissionList() {
    this.permissionApi.GroupPermissionList().subscribe((q: any) => {
      this.permissionGpList = q.content;
    })
  }

  open(content:any) {
    this.modalService.open(content, {size:'lg'})
  }


  openAccess(contentAccess:any) {
    this.offcanvasService.open(contentAccess, {ariaLabelledBy: 'offcanvas-basic-title'})
  }
}
