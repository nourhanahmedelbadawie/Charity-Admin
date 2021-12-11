import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ConfigService } from '../../../config/config.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})
export class PartnersListComponent implements OnInit {

  baseUrl;
  partners: Observable<any>;
  _partners = new BehaviorSubject<[]>([]);

  constructor(private configService: ConfigService) {
    this.baseUrl = configService.baseurl;
  }

  ngOnInit(): void {
    this.getPartnersList();
    this.partners= this._partners.asObservable();

  }
  getPartnersList() {
    this.configService.getAllPartnersList().subscribe((data) => {
      this._partners.next(data);
    });
  }
  deletegetPartner(id) {
    Swal.fire({
      title: "Do you want to delete this partner?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.configService.deletePartner(id).subscribe(
          (data: any) => {
            Swal.fire("deleted successfuly!", "", "success");
            this.getPartnersList();

          },
          (err) => {
            console.log(err);

            Swal.fire({
              title: "Error",
              text: "Something went wrong ",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        );
      }
    });
  }
}
