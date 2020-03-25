import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePostsComponent } from './update-posts/update-posts.component';
import { MatExpansionModule } from '@angular/material/expansion';

const landingRoutes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [ AngularFireAuthGuard ] }
];

@NgModule({
  declarations: [LandingPageComponent, UpdatePostsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    RouterModule.forChild(landingRoutes)
  ]
})
export class LandingModule { }
