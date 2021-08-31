import { AfterContentInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit, DoCheck,OnDestroy,AfterContentInit  {
  userEmail: string = "[user-email]";
  // posts:any[] = [];
  // somevar={
  //             other:{other:"something cool 1"} 
  // }
  constructor() { }

  ngOnInit(): void {
    //   setTimeout(() => {
    //       this.somevar.other.other += "  i can do things"
    //   },5000)
    //   const temp= this.someFunc();
    //   temp();
    //   setTimeout(() => {
    //     this.posts=[1,2,3,4,5]
    // },2000)
  }
  // returnSomeVal =()=> "i am val of fun"
  // returnSomeValWithType :()=>string =()=> "i am val of fun with ts"

  ngDoCheck(){
    console.count("i am running");
  }   
  ngOnDestroy(){
    //this.posts=[1,2,3,4,5];
  }
  ngAfterContentInit(){
    // like on load
    console.count("i am ngAfterContentInit ")
  }
  // someFunc(){
  //   const that = this;//that the context 
  //   function name(){
  //     var a = that;
  //   }
  //   return name;

    // const name2= ()=>{
    //   var a = this;
    // }
    // name.bind(this)()
    // nam2();
  //}

  // anotherFunc($event:any){
  //   return $event + ' some value'
  // }



  

}
