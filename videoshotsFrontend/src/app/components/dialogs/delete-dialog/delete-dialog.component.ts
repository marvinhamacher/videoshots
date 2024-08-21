import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ScreenshotAdding} from "../../../models/ScreenshotAdding";
import {UploadService} from "../../../services/upload.service";
import {ScreenshotDeleting} from "../../../models/ScreenshotDeleting";
import {DeleteService} from "../../../services/delete.service";

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDialogActions,
        MatFormField,
        MatInput,
        ReactiveFormsModule
    ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent {
   constructor(
    public dialogReference: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScreenshotDeleting,
    private service: DeleteService) { }
    onNoClick(): void {
     this.dialogReference.close();
    }

    onYesClick(): void{
     this.service.deleteScreenshot(this.data.id).subscribe(() => {
           console.log("deleted" + this.data.title)
           window.location.reload()
         })
     this.dialogReference.close();
     window.location.reload()

    }
}
