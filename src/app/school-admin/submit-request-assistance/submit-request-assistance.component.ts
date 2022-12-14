import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssistanceDialogComponent } from './assistance-dialog/assistance-dialog.component';

export interface RequestAssistanece {
  id: number;
  status: string
  requestDesc: string;
  requestDate: string;
  tutorialTime: string;
  studentLevel: string;
  studentNumber: string;
}

const STATIC_DATA: RequestAssistanece[]= [
  {id: 1, status: 'New', requestDesc: 'Assistance in cursed tools subject', requestDate: '1/2/2023', tutorialTime: '15:00pm', studentLevel: '3rd Grade', studentNumber: '4'}
]

@Component({
  selector: 'app-submit-request-assistance',
  templateUrl: './submit-request-assistance.component.html',
  styleUrls: ['./submit-request-assistance.component.css']
})
export class SubmitRequestAssistanceComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  
  displayedColumnsAssistance: string[] = ['id', 'status','requestDesc', 'requestDate', 'tutorialTime', 'studentLevel', 'studentNumber', 'action'];
  dataSourceAssistance!: MatTableDataSource<RequestAssistanece>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSourceAssistance.paginator = this.paginator;
    this.dataSourceAssistance.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSourceAssistance = new MatTableDataSource(STATIC_DATA);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAssistance.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAssistance.paginator) {
      this.dataSourceAssistance.paginator.firstPage();
    }
  }

  openDialog(){
    this.dialog.open(AssistanceDialogComponent, {
      width: "40%"
    }).afterClosed();
  }

}
