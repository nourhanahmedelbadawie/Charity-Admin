import { ConfigService } from '../../../config/config.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-alldonation',
  templateUrl: './alldonation.component.html',
  styleUrls: ['./alldonation.component.scss']
})
export class AlldonationComponent implements OnInit {

  constructor(private route:Router , private configService:ConfigService) { }
  allCurrentDep:Observable<any> 
  allUrgentDep: Observable<any>
 
  _allCurrentDep = new BehaviorSubject<[]>([])
  _allUrgentDep = new BehaviorSubject<[]>([])

  ngOnInit() {
    this.getNormalDepartment()
     this.getUrgentDepartment()
     this.allCurrentDep= this._allCurrentDep.asObservable();
     this.allUrgentDep = this._allUrgentDep.asObservable();
  
     }



  



   getNormalDepartment(){
     this.configService.getNormalDepartment().subscribe(data=>{
     
   this._allCurrentDep.next(data);


  

     })
   }
      getUrgentDepartment(){
     this.configService.getUrgentDepartment().subscribe(data=>{
   this._allUrgentDep.next(data);

     })
   }

   gosingleDonationt()
   {
     console.log('hh')
     this.route.navigate(['/donations/single_donation']);
 
   }
goNewDonation(){
  
  this.route.navigate(['/donations/newdonation']);

}
   makeUrgentDepartment(id ,obj){
     this.configService.makeUrgentDepartment(id ,JSON.stringify(obj))
      .subscribe(
        (data: any) => {
          Swal.fire({
            title: "success",
            text: "Send successfuly",
            icon: "success",
            confirmButtonText: "Ok",
          });

            this.getNormalDepartment()
               this.getUrgentDepartment()


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

  }
