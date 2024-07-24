import { Component, OnInit } from '@angular/core';
import {ListingService} from "./listing.service";
import {JsonPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})


export class ListingComponent implements OnInit{
  content!: any[];
  constructor(private service: ListingService) {}
  ngOnInit(): void {
    this.service.getData().subscribe(
      (response: any[]) => {
        this.content = response;
      },
      (error: any) => {
        console.error('Fehler bei der datenaufbereitung:', error);
      }
    )
  }

}
