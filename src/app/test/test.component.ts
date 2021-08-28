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
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public greeting = "";
  public textoSincronizado = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name; 
  }

  onClick(event:any){
    console.log(event)
    this.greeting = event.type;
  }
  lowMessage(value:any){
    console.log(value);

  }

}
