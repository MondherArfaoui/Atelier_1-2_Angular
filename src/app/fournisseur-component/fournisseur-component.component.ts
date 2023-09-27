import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent  {

  idFournisseur: number = 105;
  code: string = 'A104B89';
  libelle: string = 'MyTeck';
  hide: boolean = false;

  toggleHide(): void {
    this.hide = !this.hide;
    console.log(this.hide);
  }

}
