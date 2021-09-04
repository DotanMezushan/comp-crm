import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() onGoTo:EventEmitter<string> = new EventEmitter<string>();
  


  constructor() { }
  ngOnInit(): void {
  }
  goTo($event: string): void {
      this.onGoTo.emit($event)
  }

}
