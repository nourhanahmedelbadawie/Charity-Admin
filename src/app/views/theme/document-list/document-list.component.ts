import { baseUrl } from "./../../../../../../Charity-User/src/environments/environment";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../../config/config.service";
import Swal from "sweetalert2";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-document-list",
  templateUrl: "./document-list.component.html",
  styleUrls: ["./document-list.component.scss"],
})
export class DocumentListComponent implements OnInit {
  baseUrl;
  docs: Observable<any>;
  _docs = new BehaviorSubject<[]>([]);

  constructor(private configService: ConfigService) {
    this.baseUrl = configService.baseurl;
  }

  ngOnInit(): void {
    this.getDocumentsList();
    this.docs= this._docs.asObservable();

  }
  getDocumentsList() {
    this.configService.getAllDocuments().subscribe((data) => {
      this._docs.next(data);
    });
  }
  deleteDocument(id) {
    Swal.fire({
      title: "Do you want to delete this document?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.configService.deleteDocument(id).subscribe(
          (data: any) => {
            Swal.fire("deleted successfuly!", "", "success");
            this.getDocumentsList();

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
