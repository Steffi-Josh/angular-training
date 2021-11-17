import { Component, OnInit } from '@angular/core';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public hardCodedAuthService : HardCodedAuthService) { }

  ngOnInit(): void {
  }

}
