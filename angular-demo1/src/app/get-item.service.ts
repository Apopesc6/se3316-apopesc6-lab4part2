import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetItemService {
  

  Price: string = '';
  Tax: string = '';
  Quantity: string = '';
  isSuccessful:boolean = false;
  Name: string = '';
  
  constructor(private httpClient: HttpClient) { }
  
  getItem(itemName: string){
    console.log("Getting:" + itemName);
    //uses backend api outside of the angular-demo1 folder
    this.httpClient.get(`https://se3316-apopesc6-lab4part2-apopesc6.c9users.io:8081/api/ItemDatabase/${itemName}`)
    .subscribe(
      (data:any) => {
          console.log(JSON.stringify(data));
          //sets the values retrieved from the server to the variables in the service
          this.isSuccessful = true;
          this.Name = itemName;
          this.Price = data.itemPrice;
          this.Tax = data.itemTax;
          this.Quantity = data.itemQuantity;
          
          
      }
      )
      
  }
  
  //Getter functions for the component to access the retrieved data.
  getName(): string{
    return this.Name;
  }
  
  getResults(): boolean{
    return this.isSuccessful;
  }
  
  getPrice(): string{
    return this.Price;
  }
  
  getTax(): string{
    return this.Tax;
  }
  
  getQuantity(): string{
    return this.Quantity;
  }
  
}
