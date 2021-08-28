import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Bryan Townsend";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name; 
  }

}
