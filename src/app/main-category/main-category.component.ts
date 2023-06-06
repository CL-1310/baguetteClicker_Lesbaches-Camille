import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
})
export class MainCategoryComponent implements OnInit {
  totalGlobal: number = 0;
  totalPerSecond: number = 0;
  clickValue: number = 0;
  titlesList: string[] = ['pains', 'pains par seconde'];
  breadClicker: string[] = ['assets/img/bread.png', 'Tranche de pain'];
  categories: { id: number; name: string; price: number; inactive: boolean }[] =
    [];
  descCategories: {
    id: number;
    name: string;
    total: number;
    eachSecond: number;
  }[] = [];
  intervalId = setInterval(() => {
    this.addBreadPerSecondToTotal();
  }, 1000);

  constructor() {
    this.clickValue = 1;
    this.descCategories = [
      { id: 0, name: 'Clics', total: 0, eachSecond: 0 },
      { id: 1, name: 'Employé(e)s', total: 0, eachSecond: 0 },
      { id: 2, name: 'Fournisseurs', total: 0, eachSecond: 0 },
      { id: 3, name: 'Nouvelles recettes', total: 0, eachSecond: 0 },
      { id: 4, name: 'Succursales', total: 0, eachSecond: 0 },
    ];
    this.categories = [
      { id: 0, name: 'Clic', price: 10, inactive: true },
      { id: 1, name: 'Employé(e)', price: 500, inactive: true },
      { id: 2, name: 'Fournisseur', price: 3000, inactive: true },
      { id: 3, name: 'Nouvelle recette', price: 15000, inactive: true },
      { id: 4, name: 'Succursale', price: 100000, inactive: true },
    ];
  }

  ngOnInit(): void {}

  checkIfActive(): void {
    for (let button of this.categories) {
      if (button.price <= this.totalGlobal) button.inactive = false;
      else button.inactive = true;
    }
  }

  onClickBread(): void {
    this.totalGlobal = this.clickValue;
    this.clickValue ++
  }

  buyItem(itemId:number): void {
    itemId > 9;
    let price = this.categories.find(category => category.id === itemId);
    let discountedPrice = this.totalGlobal - itemId;
    let finalPrice = Math.round(itemId * 0.075);
    itemId ++;

    let second = 0;
    let eachSecond = this.descCategories.find(descCategories => descCategories.eachSecond === second);

    let name = 'Clics'
    let categoryName = this.descCategories.find(descCategories => descCategories.name === name);

    // if(categoryName != this.categories.find(category => category.name === name)){
    //   eachSecond = 5*Math.pow(2,itemId) * this.descCategories[itemId].total
    // }

    this.totalPerSecond = 5*Math.pow(2,itemId)

  }

  addBreadPerSecondToTotal(): void {}

  ngOnDestroy(): void {}
}
