import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() score:number; 


  constructor() { }

  ngOnInit(): void {
  }

}
