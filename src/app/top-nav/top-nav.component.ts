import { AfterContentInit, Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit  {
  @Input() userEmail: string = "[user-email]";
  @Input() isLoading : boolean = false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
  logOut() {
    this.authService.logOut();
  }







}
