import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {ScreenshotDeleting} from "../../../models/ScreenshotDeleting";
import {DeleteService} from "../../../services/delete.service";
import {ScreenshotModel} from "../../../models/ScreenshotModel";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDialogActions,
    MatCardImage,
    NgIf,
    MatDivider
  ],
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.css'
})
export class DetailDialogComponent {
   constructor(
    public dialogReference: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScreenshotModel) { }
    onNoClick(): void {
     this.dialogReference.close();
    }
}
