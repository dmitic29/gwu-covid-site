import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-at-home-care',
  templateUrl: './at-home-care.component.html',
  styleUrls: ['./at-home-care.component.scss']
})
export class AtHomeCareComponent implements OnInit {

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
