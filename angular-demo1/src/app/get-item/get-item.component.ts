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
    
    this.getItemService.getItem(itemName);
    setTimeout(() => {
      this.isSuccessful = this.getItemService.getResults();
      this.Name = this.getItemService.getName();
      this.Price = this.getItemService.getPrice();
      this.Tax = this.getItemService.getTax();
      this.Quantity = this.getItemService.getQuantity();
    
    }, 1000);
    
    
  }
  
  ngOnInit() {
  }

}
