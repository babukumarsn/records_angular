import { TestBed } from '@angular/core/testing';

import { ListRecordsService } from './list-records.service';
import { HttpClientModule } from '@angular/common/http';

describe('ListRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]      
  }));

  it('should be created', () => {
    const service: ListRecordsService = TestBed.get(ListRecordsService);
    expect(service).toBeTruthy();
  });
});
