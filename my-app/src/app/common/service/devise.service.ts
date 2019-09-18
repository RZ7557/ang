import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //pour version temporaire avant appel http vers api-rest:
  private tabDevise : Devise[] = [
    new Devise("USD","Dollar",1),
    new Devise("EUR","Euro",0.9),
    new Devise("GBP","Livre",0.8),
    new Devise("JPY","Yen",120)
    // 0.9 euro pour 1 dollar
  ];

  public rechercherDevises() : Devise[] /*pas encore asynchrone */{
    return this.tabDevise; //version temporaire avant appel http
  }

  public convertir(montant:number, 
                   codeMonnaieSource : string ,
                   codeMonnaieCible : string ) : number{
      let res = 1;
      //code temporaire (sans http):
      let deviseCible =null ;
      let deviseSource = null;
      for(let d of this.tabDevise){
        if(d.code==codeMonnaieSource)
             deviseSource= d;
        if(d.code==codeMonnaieCible)
             deviseCible= d;
      }
      res = montant * deviseCible.change / deviseSource.change;
      return res;
  }

  constructor() { }
}
