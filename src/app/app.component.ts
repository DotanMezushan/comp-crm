import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comp-crm';
  isLoading:boolean = false;
  userEmail!:string;

  constructor(
    private router: Router,
    private auth : AuthService
  ) {}
  ngOnInit(): void {
    this.auth.getAuth().subscribe(user =>{
        this.isLoading =!!user;
        this.userEmail= user?.email as string;
    });
  }
  navigateTo($event: string){
    this.router.navigate([$event]);
  }
  sendMessage(event: string){
   this.title = event;
  }


}
