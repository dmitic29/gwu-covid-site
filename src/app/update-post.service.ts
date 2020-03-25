import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UpdatePost } from './update-post';

@Injectable({
  providedIn: 'root'
})
export class UpdatePostService {

  constructor(private firestore: AngularFirestore) { }

  getUpdatePosts() {
    return this.firestore.collection('update-posts').snapshotChanges();
  }

  createUpdatePost(titl: string, sum: string, bod: string) {
    return this.firestore.collection('update-posts').add({
      title: titl,
      summary: sum,
      body: bod,
      lastmod: Date.now()
    })
    .then(doc => {
      console.log(doc.id);
    }).catch(err =>
      console.log(err));
  }

  updateUpdatePost(post: UpdatePost, titl: string, sum: string, bod: string) {
    this.firestore.doc('update-posts/' + post.id).update({
      title: titl,
      summary: sum,
      body: bod,
      lastmod: Date.now()
    });
  }

  deleteUpdatePost(postId: string) {
    this.firestore.doc('update-posts/' + postId).delete();
  }
}
