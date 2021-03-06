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
  score_board: number = 0;
  resultado: number|null = null;
  caja_seleccion_objetos : any[]=[]




  constructor() {
    this.names = ['adonay', 'jacobo', 'elisa', 'elisabet', 'luis-marin', 'luis-clar', 'mónica', 'sunil', 'angelines', 'paloma', 'jordi', 'marçal'];

    let tempCards: string[] = [];
    this.names.forEach(card => {  //iteramos el array names, y haces un push de cada elemento tempCards
      tempCards.push(card);
      tempCards.push(card);
    })

    this.names = tempCards;  //names será ahora igual a tempcards
    this.names = this.shuffle(this.names); // lo barajamos
    this.cards = this.names.map(name => ({name: name, visible: false, color:"grey"})); //lo guardamos en un obejeto, con las porpiedades visible y color
    console.log(this.cards);


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

// creamos la funcion para recibir la infomracion del hijo(score)
  recibir(value: any) {
    this.resultado= value
    this.caja_seleccion_objetos=[] //vaciamos la caja
    this.score_board = value
  }

// creamos la funcion para recibir la infomracion del hijo(card)
  decide(value: any) {
    console.log("valor ",value );

    setTimeout(()=>{
      // creamos una "caja" cada vez que se ejecuta la funion decide()  con un unshift metemos el valor en la caja
      var objetos_select = value
      this.caja_seleccion_objetos.unshift(objetos_select) //contiene el nombre y la propiedad visible

      var length_seleccion_user = this.caja_seleccion_objetos.length

      if (length_seleccion_user % 2 == 0) {  //si el length del array es par, desencadenará una serie de condicionales
        console.log("es verdad son dos")

        if (this.caja_seleccion_objetos[0].name == this.caja_seleccion_objetos[1].name){ // si la posicion 1 no coincide con la 2, esconderá las tarjetas
          console.log("es verdad no son iguales")
          console.log("tenemos en la caja" ,this.caja_seleccion_objetos)
          this.caja_seleccion_objetos[0].visible=true
          this.caja_seleccion_objetos[1].visible=true
          this.caja_seleccion_objetos[0].color="green"
          this.caja_seleccion_objetos[1].color="green"

        } else {
          this.caja_seleccion_objetos[0].visible=false
          this.caja_seleccion_objetos[1].visible=false
        }
        console.log("time out");

        this.resultado= this.score_board-(length_seleccion_user/2) //actualizamos el marcador cada vez que haga un intento
        console.log("resultado",this.resultado)
      }
    },2000);

    console.log("time output");
  }

}
