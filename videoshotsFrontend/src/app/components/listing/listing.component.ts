import { Component, OnInit } from '@angular/core';
import {ListingService} from "../../services/listing.service";
import {CommonModule, JsonPipe, NgIf} from "@angular/common";
import {ScreenshotModel} from "../../models/ScreenshotModel";
import {MatCardModule} from '@angular/material/card'
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ScreenshotAdding} from "../../models/ScreenshotAdding";
import {FormDialogComponent} from "../dialogs/form-dialog/form-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../dialogs/delete-dialog/delete-dialog.component";
import {ScreenshotDeleting} from "../../models/ScreenshotDeleting";
import {DetailDialogComponent} from "../dialogs/detail-dialog/detail-dialog.component";
import {ScreenshotEditing} from "../../models/ScreenshotEditing";

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    MatCardModule,
    MatButton,
    MatIcon,
    MatFabButton,
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})


export class ListingComponent implements OnInit{
  screenshots: ScreenshotModel[];
  constructor(private service: ListingService,
              public dialog: MatDialog) {}
  ngOnInit(): void {
    this.service.getData().subscribe(
      ((data: ScreenshotModel[]) => {
        this.screenshots = data;
      }));
  }

  openDeleteDialog(title : String,id : number) {
    let dialogdata : ScreenshotDeleting = {
      title : title,
      id : id,
    }
    this.dialog.open(DeleteDialogComponent,{
      data : dialogdata,
    })
  }

    openInfoDialog(data : ScreenshotModel) {
    let dialogdata : ScreenshotModel = {
      title : data.title,
      id : data.id,
      screenshot: data.screenshot,
      description: data.description,
      publication_date : data.publication_date
    }
    this.dialog.open(DetailDialogComponent,{
      data : dialogdata,
    })
  }


  openEditDialog(data : ScreenshotModel) {
    let dialogdata : ScreenshotEditing = {
      isEdit : true,
      title : data.title,
      id : data.id,
      screenshot: data.screenshot,
      description: data.description,
      publication_date : data.publication_date
    }
    this.dialog.open(FormDialogComponent,{
      data : dialogdata,
    })
  }
}
