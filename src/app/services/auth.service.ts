import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string):Promise<any>{
    return new Promise((resolve, reject) => {
       this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),error => reject(error))
    })
  }

  getAuth(){
    return this.afAuth.authState;
  }
  logOut(): Promise<void>{
    return this.afAuth.signOut();
  }
}
