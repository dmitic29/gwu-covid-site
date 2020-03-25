import { Component, OnInit } from '@angular/core';
import { UpdatePost } from '../../update-post';
import { UpdatePostService } from '../../update-post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.scss']
})
export class UpdatePostsComponent implements OnInit {
  posts: UpdatePost[];
  postForm: FormGroup;

  constructor(private ups: UpdatePostService, fb: FormBuilder) {
    this.postForm = fb.group({
      Title: ['' , [Validators.required]],
      Summary: [''],
      Body: ['' , [Validators.required]],
    });
   }

   updateForm(t: string, s: string, b: string) {
     this.postForm.controls.Title.setValue(t);
     this.postForm.controls.Summary.setValue(s);
     this.postForm.controls.Body.setValue(b);
   }

  ngOnInit() {
    this.ups.getUpdatePosts().subscribe(data => {
      this.posts = data.map(p => {
        return {
          id: p.payload.doc.id,
          ...p.payload.doc.data()
        } as UpdatePost;
      });
    });
  }

  update(post: UpdatePost, t: string, s: string, b: string) {
    this.ups.updateUpdatePost(post, t, s, b);
  }

  delete(id: string) {
    this.ups.deleteUpdatePost(id);
  }
}
