import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid-faq',
  templateUrl: './covid-faq.component.html',
  styleUrls: ['./covid-faq.component.scss']
})
export class CovidFaqComponent implements OnInit {

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
