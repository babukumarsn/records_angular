import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecordsComponent } from './list-records.component';
import { ListRecords } from './list-records.model';
import { ListRecordsService } from './list-records.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListRecordsComponent', () => {
  let component: ListRecordsComponent;
  let fixture: ComponentFixture<ListRecordsComponent>;
  let mockResultData: ListRecords[] = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae"
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListRecordsComponent],
      providers: [ListRecordsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should excute method of sortTable and return the value 1 at first time and 2 at second time', () => {
    component.listRecords = mockResultData;
    component.sortTable('id');
    expect(component.listRecords[0].id).toBe(1);
    component.sortTable('id');
    expect(component.listRecords[0].id).toBe(2);
  });
});
