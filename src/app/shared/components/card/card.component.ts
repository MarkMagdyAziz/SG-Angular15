import { IProgram } from './../../../models/interfaces/iprogram';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() programsArray: IProgram[] = [];
  random: number = Math.ceil(Math.random() * 1000);
  currentPage: number = 1
  pageSize: number = 9
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.programsArray);

  }
}
