import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Bryan Townsend";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name; 
  }

}
