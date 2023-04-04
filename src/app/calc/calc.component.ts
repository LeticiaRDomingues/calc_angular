import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
   //Atributos de classe/componente
   num1 : number = 0;
   num2 : number = 0;

   soma : number = 0;
   subt : number = 0;
   mult : number = 0;
   divi : number = 0;
   resp = 0;

   somar(){
    this.soma = this.num1 + this.num2;
    this.resp = this.soma;
  }

  subtrair(){
    this.subt = this.num1 - this.num2;
    this.resp = this.subt;
  }

  multiplicacao(){
    this.mult = this.num1 * this.num2;
    this.resp = this.mult;
  }

  divisao(){
    this.divi = this.num1 / this.num2;
    this.resp = this.divi;
  }
}


