import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashPageComponent } from './dash-page/dash-page.component';
import { Routes, RouterModule } from '@angular/router';

import { GuidanceForMedicalStaffComponent } from './guidance-for-medical-staff/guidance-for-medical-staff.component';
import { TestingForCovidComponent } from './testing-for-covid/testing-for-covid.component';
import { CovidFaqComponent } from './covid-faq/covid-faq.component';
import { ClinicalCareComponent } from './clinical-care/clinical-care.component';
import { AtHomeCareComponent } from './at-home-care/at-home-care.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


const dashRoutes: Routes = [
  { path: '', component: DashPageComponent },
  { path: 'guidance-for-medical-staff', component: GuidanceForMedicalStaffComponent },
  { path: 'testing-for-covid', component: TestingForCovidComponent },
  { path: 'covid-faq', component: CovidFaqComponent },
  { path: 'clinical-care', component: ClinicalCareComponent },
  { path: 'at-home-care', component: AtHomeCareComponent }
];

@NgModule({
  declarations: [DashPageComponent,
    GuidanceForMedicalStaffComponent,
    TestingForCovidComponent,
    CovidFaqComponent,
    ClinicalCareComponent,
    AtHomeCareComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(dashRoutes)
  ]
})
export class DashboardModule { }
