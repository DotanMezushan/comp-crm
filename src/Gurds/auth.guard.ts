import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private afAuth: AngularFireAuth,
     private router : Router){}
  canActivate()
       {
           return this.afAuth.authState.pipe(
             map(auth => {
               if(!auth){
                 this.router.navigate(['/login'])
                 return false;
               }else{
                 return true;
               }
             })
           )
       }

}
