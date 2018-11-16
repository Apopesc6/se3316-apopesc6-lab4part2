import { Component, OnInit } from '@angular/core';
import {PostItemService} from '../post-item.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  providers: [PostItemService]
})
export class PostItemComponent implements OnInit {

  constructor(private postItemService: PostItemService) { }
  
  saveItem(newName: string, newPrice: number, newTax: number, newQuantity: number){
    
    this.postItemService.postItem(newName, newPrice, newTax, newQuantity);
    
    alert ("Added "+ newName + " successfully to the database!");
  }
  
  ngOnInit() {
  }

}
