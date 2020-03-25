import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinical-care',
  templateUrl: './clinical-care.component.html',
  styleUrls: ['./clinical-care.component.scss']
})
export class ClinicalCareComponent implements OnInit {

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
