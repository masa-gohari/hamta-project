import { Component, OnInit, TemplateRef } from '@angular/core';
import { dentistsServicesApi } from '../services/dentists.service';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent implements OnInit {
  doctorsServiceList: Array<any>;
  closeResult = '';

  constructor(private dentistsServicesApi: dentistsServicesApi,private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    this.doctorsInfo()
  }

  showDetailDr(i: number) { }

  doctorsInfo() {
    this.dentistsServicesApi.GetPractitionerInfo().subscribe((q: any) => {
      this.doctorsServiceList = q.content;
    })
  }

	open(content:any) {
		this.offcanvasService.open(content, { position: 'end'}).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
