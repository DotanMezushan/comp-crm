import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  error!: string;

  constructor(private authService: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(["/"])
      }
    })
  }
  onSubmit({value , valid} : NgForm ){
    console.log('value',value)
    console.log('valid',valid)
    if(valid){
      const {email, password} = value;
      this.authService.login(email, password)
      .then(_=> alert("Successfully login"))
      .then(_=>    this.router.navigate(['/']))
      .catch((error)=> alert(error))
    }
  }

}
