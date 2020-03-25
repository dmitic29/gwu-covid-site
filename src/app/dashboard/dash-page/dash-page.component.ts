import { Component, OnInit } from '@angular/core';
import { UpdatePost } from 'src/app/update-post';
import { UpdatePostService } from 'src/app/update-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.scss']
})
export class DashPageComponent implements OnInit {
  posts: UpdatePost[];
  constructor(private ups: UpdatePostService, private router: Router) { }

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

  goToRoute(r: string): void {
    this.router.navigate([r]);
  }

}
