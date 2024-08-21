import {Component, Inject, Input, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ScreenshotModel} from "../../../models/ScreenshotModel";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ScreenshotAdding} from "../../../models/ScreenshotAdding";
import {UploadService} from "../../../services/upload.service";
import {EmptyError} from "rxjs";

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    FormsModule,
    MatFormField,
    MatInput
  ],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {
   constructor(
    public dialogReference: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ScreenshotAdding,
    private uploadService: UploadService) { }
    onNoClick(): void {
     this.dialogReference.close();
    }

    onYesClick(): void{
     let data = this.getData();
     if(data.length > 0){
       if(this.data.isedit){
       //patch und put
      } else {
         this.uploadService.addData(data[0],data[1],data[2]).subscribe(() => {
           console.log("called")
           window.location.reload()
         })
      }
     }else {
         throw EmptyError;
     }
      console.log(this.getData());
      this.dialogReference.close();
    }

    source: string = "";
    title: string = "";
    description: string = "";

    imageChangeEvent(event: Event): void {
      const input = event.target as HTMLInputElement;
      try {
         if (input.files && input.files.length > 0) {
           const reader = new FileReader();
           reader.onload = (event: any) => {
             this.source = event.target.result;
           };
           if (input?.files[0] !== null)
             reader.readAsDataURL(input?.files[0]);
         }
      } finally {
        this.getData()
      }
    }

    getData(){
      if( this.title != null && this.description != null){
          return [this.source,this.title,this.description];
      } else {
        return [];
      }

    }
}
