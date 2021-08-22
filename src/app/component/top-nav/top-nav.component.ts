import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  somevar={
              other:{other:"something cool 1"} 
  }
  constructor() { }

  ngOnInit(): void {
      setTimeout(() => {
          this.somevar.other.other += "  i can do things"
      },5000)
  }
  returnSomeVal =()=> "i am val of fun"
  returnSomeValWithType :()=>string =()=> "i am val of fun with ts"

}
