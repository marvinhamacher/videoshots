import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListingComponent} from "./components/listing/listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}
