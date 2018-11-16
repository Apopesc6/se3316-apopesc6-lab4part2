import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostItemService {
  
  constructor(private httpClient: HttpClient) { }
  
  postItem(newName: string, newPrice: number, newTax: number, newQuantity: number){
    
    console.log ( "Name: "+ newName + " Price: " + newPrice + " Tax: " + newTax + " Quantity: " + newQuantity);
    
    //post request using the back end api called ItemDatabase
    this.httpClient.post(`https://se3316-apopesc6-lab4part2-apopesc6.c9users.io:8081/api/ItemDatabase/createItem`, {
      //using the values passed in
      itemName: newName,
      itemQuantity: newQuantity,
      itemPrice: newPrice,
      itemTax: newTax
      
      
    })
    .subscribe(
      (data:any[]) => {
        //console.log(data);
          console.log(data);
      }
      )
    
  }
}
