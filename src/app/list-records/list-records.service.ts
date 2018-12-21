import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListRecords } from './list-records.model';

@Injectable({
  providedIn: 'root'
})
export class ListRecordsService {

  constructor(private http: HttpClient) { }

  getRecods(): Observable<ListRecords[]> {
    return this.http.get<ListRecords[]>('http://jsonplaceholder.typicode.com/posts');
  }
}
