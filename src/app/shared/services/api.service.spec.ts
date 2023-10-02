import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SectionSlug } from '../enums/section-slug.enum';
import { ApiService } from './api.service';
import { apiServiceMockResponse } from './api.service.spec.mock';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return home section top stories', () => {
    service.getStories().subscribe((response) => {
      expect(response).toEqual(apiServiceMockResponse);

      expect(response.status).toEqual('OK');
      expect(response.num_results).toEqual(4);
      expect(response.results.length).toEqual(4);
      expect(response.section).toEqual('home');
    });

    const controller = httpTestingController.expectOne(
      'https://api.nytimes.com/svc/topstories/v2/home.json'
    );

    expect(controller.request.method).toEqual('GET');

    controller.flush(apiServiceMockResponse);
  });

  it('should return automobiles section top stories', () => {
    service.getStories(SectionSlug.Automobiles).subscribe((response) => {
      expect(response.section).toEqual(SectionSlug.Automobiles);
    });

    const controller = httpTestingController.expectOne(
      'https://api.nytimes.com/svc/topstories/v2/automobiles.json'
    );

    expect(controller.request.method).toEqual('GET');

    controller.flush(apiServiceMockResponse);
  });
});
