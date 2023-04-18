import { Component } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day8';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DialogBoxComponent,{
      width:'350px',
    })
  }
}
