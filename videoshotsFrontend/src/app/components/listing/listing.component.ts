import { Component, OnInit } from '@angular/core';
import {ListingService} from "../../services/listing.service";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ScreenshotModel} from "../../models/ScreenshotModel";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule,
    JsonPipe
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})


export class ListingComponent implements OnInit{
  screenshots: ScreenshotModel[];
  constructor(private service: ListingService) {}
  ngOnInit(): void {
    this.service.getData().subscribe(
      ((data: ScreenshotModel[]) => {
        this.screenshots = data;
      }));
  }

}
