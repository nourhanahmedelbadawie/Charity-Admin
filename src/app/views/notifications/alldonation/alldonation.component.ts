import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alldonation',
  templateUrl: './alldonation.component.html',
  styleUrls: ['./alldonation.component.scss']
})
export class AlldonationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goSingleAchivement()
  {
    console.log('hh')
    this.route.navigate(['/notifications/single_donation']);

  }
}
