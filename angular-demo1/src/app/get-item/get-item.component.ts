import { Component, OnInit } from '@angular/core';
import {GetItemService} from '../get-item.service';



@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css'],
  providers: [GetItemService]
})
export class GetItemComponent implements OnInit {

  Name : string = '';
  Price : string = '';
  Tax : string = '';
  Quantity : string = '';
  isSuccessful : boolean = false;
  
  constructor(private getItemService: GetItemService) { }
  
  getItem(itemName : string){
    
    //Calls the getItem function in get-item service
    this.getItemService.getItem(itemName);
    //Make the ui wait 1s to update to allow time for the HTTP Get request to be retrieved from the server
    setTimeout(() => {
      //Sets all of the data of the components to the retrieved data from the server
      this.isSuccessful = this.getItemService.getResults();
      this.Name = this.getItemService.getName();
      this.Price = this.getItemService.getPrice();
      this.Tax = this.getItemService.getTax();
      this.Quantity = this.getItemService.getQuantity();
      
      //If it was retrieved successfully
      if (this.isSuccessful == true){
        alert ("Retrieved " + itemName + " from the database");
      }else{
        alert ("Could not retrieve " + itemName + " from the database");
      }
    
    }, 1000);
    
    
    
    
  }
  
  ngOnInit() {
  }

}
