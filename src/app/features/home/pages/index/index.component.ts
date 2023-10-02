import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Result } from '../../../../shared/interfaces/top-stories-response.interface';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  public isLoading = true;
  public highlightStories: Array<Result> = [];
  public stories: Array<Result> = [];

  constructor(private readonly apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService
      .getStories()
      .pipe(
        catchError((error) => {
          this.isLoading = false;

          return throwError(() => new Error(error));
        })
      )
      .subscribe(({ results }) => {
        this.highlightStories = results.slice(0, 3);
        this.stories = results.slice(3);
        this.isLoading = false;
      });
  }
}
