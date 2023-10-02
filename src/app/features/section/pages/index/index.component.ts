import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';
import { Result } from '../../../../shared/interfaces/top-stories-response.interface';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  public isLoading = true;
  public stories: Array<Result> = [];
  public section = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
        catchError((error) => {
          this.isLoading = false;

          return throwError(() => new Error(error));
        }),
        map((params) => params['section']),
        switchMap((section: string) => this.apiService.getStories(section))
      )
      .subscribe(({ section, results }) => {
        this.section = section;
        this.stories = results;
        this.isLoading = false;
      });
  }
}
