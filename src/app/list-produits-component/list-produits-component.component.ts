import { Component } from '@angular/core';
import { Produit } from '../Models/produit';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css']
})
export class ListProduitsComponentComponent {

  listProduits:Produit[]=[

    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"Produit2", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit3", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit4", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit5", prixUnitaire:70, tauxTVA:0.20}
    
  ]

  tvaModifiedProductId: number | null = null;

  adjustTVA(product: Produit): void {
    if (product.tauxTVA !== 0.20) {
      product.tauxTVA = 0.20;

      this.tvaModifiedProductId = product.idProduit;
      setTimeout(() => {
        this.tvaModifiedProductId = null;
      }, 3000);
    }
  }

  isTvaModified(product: Produit): boolean {
    return product.tauxTVA === 0.20;
  }

  searchText !: string;
  filteredList: Produit[] = [...this.listProduits];

  filterProduits(): void {
    if (this.searchText) {
      this.filteredList = this.listProduits.filter(produit => produit.code.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      this.filteredList = [...this.listProduits];
    }
  }

  addProduct(newProduct: Produit): void {
    this.filteredList.push(newProduct);
  }

}
