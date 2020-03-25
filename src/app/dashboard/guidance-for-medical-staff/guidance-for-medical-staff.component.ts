import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guidance-for-medical-staff',
  templateUrl: './guidance-for-medical-staff.component.html',
  styleUrls: ['./guidance-for-medical-staff.component.scss']
})
export class GuidanceForMedicalStaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }

  toHome() {
    this.router.navigate(['dashboard']);
  }
}
