import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() score:any = 0
  @Input() score2:number= 0

  @Output() user_goal = new EventEmitter<any>()


  constructor() {
   }

  ngOnInit(): void {

  }

  enviar() {
    this.user_goal.emit(this.score.value);
  }

}
