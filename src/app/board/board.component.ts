import { Component, OnInit } from '@angular/core';
import {card} from '../card/card.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  names: string[] = [];
  cards: card[] = [];
  score_board: number = 10;
  resultado: number = 0;


  caja_seleccion_objetos : any[]=[]



  constructor() {
    this.names = ['adonay', 'jacobo', 'elisa', 'elisabet', 'luis-marin', 'luis-clar', 'mónica', 'sunil', 'angelines', 'paloma', 'jordi', 'marçal'];
    let tempCards: string[] = [];
    this.names.forEach(card => {
      tempCards.push(card);
      tempCards.push(card);
      console.log(tempCards);

    })

    this.names = tempCards;

    this.names = this.shuffle(this.names);

    this.cards = this.names.map(name => ({name: name, visible: false}));

  }

  ngOnInit(): void {

  }

  shuffle(a: string[]) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }


  enviar(value: any) {
    console.log("score ",value);
    this.score_board = value
  }


// creamos una "caja" metemos con un push los dos nombres,
// si coinciden cambiamos el hidden a true, si no lo pasamos a false.
  decide(value: any) {


// si la longitud el array es dos comparamos los valores
    setTimeout(()=>{
      var objetos_select = value
      this.caja_seleccion_objetos.unshift(objetos_select) //contiene el nombre y si es visible

      var length_seleccion_user = this.caja_seleccion_objetos.length
      console.log(length_seleccion_user)
      if (length_seleccion_user % 2 == 0) {  //si el nº es par
        console.log("es verdad son dos")

        if (this.caja_seleccion_objetos[0].name!=this.caja_seleccion_objetos[1].name){
          console.log("es verdad no son iguales")
          console.log("tenemos en la caja" ,this.caja_seleccion_objetos)
          this.caja_seleccion_objetos[0].visible=false
          this.caja_seleccion_objetos[1].visible=false
        }
        this.resultado= this.score_board-(length_seleccion_user/2) //actualizamos el marcador cada vez que haga un intento
        console.log("resultado",this.resultado)


      }
    },1000);

  }

}
