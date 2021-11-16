import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage : String = 'An Error occured!!!! Contact 734375348 for help'
  constructor() { }

  ngOnInit(): void {
  }

}
