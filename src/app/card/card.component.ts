import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type card = {
  name: string,
  visible: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: card = {name: '', visible: false};
  @Output() cardClick: EventEmitter<card> = new EventEmitter<card>();

  constructor() { }

  ngOnInit(): void {
  }

  hasClicked(event: any) {
    this.card.visible = !this.card.visible;
    this.cardClick.emit(this.card);
    console.log("cc:", this.cardClick);
  }
}
