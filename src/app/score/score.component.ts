import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {


  @Input() score2:number|null=null

  @Output() send_to_board = new EventEmitter<any>()
  score:any = 0 // los datos que queremos enviar al padre


  constructor() {
   }

  ngOnInit(): void {

  }

  enviar() {
    this.send_to_board.emit(this.score.target.value);
  }
  reload() {
    window.location.reload();
  }

}
