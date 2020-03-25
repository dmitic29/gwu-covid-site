import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing-for-covid',
  templateUrl: './testing-for-covid.component.html',
  styleUrls: ['./testing-for-covid.component.scss']
})
export class TestingForCovidComponent implements OnInit {

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
