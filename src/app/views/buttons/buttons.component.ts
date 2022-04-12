import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config/config.service";
import Swal from "sweetalert2";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  templateUrl: "buttons.component.html",
})
export class ButtonsComponent implements OnInit {
  url = "http://128.199.36.173:8080";
  achievementList: Observable<any>;
  _achievementList = new BehaviorSubject<[]>([]);

  constructor(private configService: ConfigService, private route: Router) {}
  ngOnInit(): void {
    this.getAchievementList();
    this.achievementList = this._achievementList.asObservable();
  }
  getAchievementList() {
    this.configService.getAchievement().subscribe((data) => {
      this._achievementList.next(data);
    });
  }
  getAch(id) {
    console.log(id);
    this.route.navigate([`/admin/edit-ach/${id}`]);
  }
  deleteAchievement(id) {
    Swal.fire({
      title: "Do you want to delete this achivement?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.configService.deleteAchievement(id).subscribe(
          (data: any) => {
            Swal.fire("deleted successfuly!", "", "success");
            this.getAchievementList();
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
