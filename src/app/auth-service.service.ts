import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isLoggedIn = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  doRegister(emailAddress, pwd) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(emailAddress, pwd)
      .then(_ => {
        this.isLoggedIn = true;
        this.router.navigate(['main']);
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(err);
      });
    });
  }

  doSignOut() {
    return new Promise<any>(() => {
      firebase.auth().signOut()
      .then(_ => {
        this.isLoggedIn = false;
        console.log('Signed out!');
        this.router.navigate(['login']);
      })
      .catch(err => {
        console.log(err);
      });
    });
  }
}
