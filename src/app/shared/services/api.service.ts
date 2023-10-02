import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SectionSlug } from '../enums/section-slug.enum';
import { TopStoriesResponse } from '../interfaces/top-stories-response.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public getStories(
    section: string = SectionSlug.Home
  ): Observable<TopStoriesResponse> {
    return this.http.get<TopStoriesResponse>(
      `${environment.baseUrl}${section}.json`
    );
  }
}
