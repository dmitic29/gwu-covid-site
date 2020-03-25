import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdatePost } from 'src/app/update-post';
import { UpdatePostService } from '../../update-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  postUpdate: UpdatePost = new UpdatePost();

  post: FormGroup;
  constructor(private router: Router, private ups: UpdatePostService, private authService: AuthServiceService, fb: FormBuilder) {
    this.post = fb.group({
      Header: ['', Validators.required],
      Summary: ['', []],
      Body: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  signOut(): void {
    this.authService.doSignOut();
  }

  toDash() {
    this.router.navigate(['dashboard']);
  }

  processPost() {
    this.ups.createUpdatePost(this.post.value.Header, this.post.value.Summary, this.post.value.Body);
    this.post.reset();
    console.log('Posting...');
  }
}
