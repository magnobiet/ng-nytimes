import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ApiService } from '../../../../shared/services/api.service';
import { apiServiceMockResponse } from '../../../../shared/services/api.service.spec.mock';
import { SharedModule } from '../../../../shared/shared.module';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule, SharedModule],
      declarations: [IndexComponent],
    });

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get stories', () => {
    jest
      .spyOn(component['apiService'], 'getStories')
      .mockImplementation(() => of(apiServiceMockResponse));

    component.ngOnInit();

    expect(component.highlightStories.length).toEqual(3);
    expect(component.stories.length).toEqual(1);
    expect(component.isLoading).toBeFalsy();
  });

  it('should catch error', () => {
    jest
      .spyOn(component['apiService'], 'getStories')
      .mockImplementation(() => throwError(() => new Error('Error')));

    component.ngOnInit();

    expect(component.highlightStories.length).toEqual(0);
    expect(component.stories.length).toEqual(0);
    expect(component.isLoading).toBeFalsy();
  });
});
