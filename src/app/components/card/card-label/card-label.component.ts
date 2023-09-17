import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../../data/data.Fake'

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit{
  

  @Input()
  gameLabel:string = "";
  

  constructor(){
  }

  ngOnInit(): void {
  }
}
