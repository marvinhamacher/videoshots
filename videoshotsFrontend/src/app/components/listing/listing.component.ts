import { Component, OnInit } from '@angular/core';
import {ListingService} from "../../services/listing.service";
import {CommonModule, JsonPipe, NgIf} from "@angular/common";
import {ScreenshotModel} from "../../models/ScreenshotModel";
import {MatCardModule} from '@angular/material/card'
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    MatCardModule,
    MatButton,
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
