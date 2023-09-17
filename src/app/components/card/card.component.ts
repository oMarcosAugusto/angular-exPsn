import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/data.Fake'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string= ""
  @Input()
  gameLabel:string = "";
  @Input()
  gameType:string = ""
  @Input()
  gamePrice:string = ""
  private id:string | null = "0";



  constructor(){
    this.gameLabel = dataFake.gameLabel
    this.gameCover = dataFake.gameCover
    this.gameType = dataFake.gameType
    this.gamePrice = dataFake.gamePrice

  } 


  ngOnInit(): void {
  //  this.setValues(this.id)
  }
    // setValues(id:string | null){
    //   const result = dataFake.filter(article =>
    //     article.id == id)[0]
    //     this.gameLabel = result.gameLabel
    //     this.gameCover = result.gameCover
    //     this.gameType = result.gameType
    //     this.gamePrice = result.gamePrice

    //     return result
    // }
}
