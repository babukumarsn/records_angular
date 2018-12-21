import { Component, OnInit } from '@angular/core';
import { ListRecordsService } from './list-records.service';
import { ListRecords } from './list-records.model';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.css']
})
export class ListRecordsComponent implements OnInit {

  listRecords: ListRecords[] = [];

  private sortOrder = {
    userId: true,
    id: true,
    title: true,
    body: true
  }

  constructor(private listRecordsService: ListRecordsService) { }

  ngOnInit() {
    this.populateRecords();
  }

  sortTable(colName: string): void {
    if (this.listRecords && this.listRecords.length > 0) {
      if (this.sortOrder[colName]) {
        this.listRecords.sort(this.asscending(colName));
      } else {
        this.listRecords.sort(this.descending(colName));
      }
      this.sortOrder[colName] = !this.sortOrder[colName];
    }
  }

  private asscending(colName: string) {
    return (a, b) => {
      if (a[colName] > b[colName]) {
        return 1;
      }
      if (a[colName] < b[colName]) {
        return -1;
      }
      return 0;
    }
  }

  private descending(colName: string) {
    return (a, b) => {
      if (a[colName] < b[colName]) {
        return 1;
      }
      if (a[colName] > b[colName]) {
        return -1;
      }
      return 0;
    }
  }

  private populateRecords(): void {
    this.listRecordsService.getRecods().subscribe((response: ListRecords[]) => {
      this.listRecords = response;
    });
  }

}
