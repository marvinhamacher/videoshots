import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListingComponent} from "./components/listing/listing.component";
import {FormDialogComponent} from "./components/dialogs/form-dialog/form-dialog.component";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatDialog, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {ScreenshotAdding} from "./models/ScreenshotAdding";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListingComponent, FormDialogComponent, MatButton, MatDialogActions, MatToolbar, MatIcon, MatFabButton, MatCard, MatCardContent, MatCardHeader, MatCardTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  constructor(
    public dialog: MatDialog
  ){}
  openDialog(){
    let dialogdata : ScreenshotAdding = {
      title : "Titel",
      description : "Beschreibung",
      isedit: false
    }
    this.dialog.open(FormDialogComponent,{
      data : dialogdata,
    })
  }
}
