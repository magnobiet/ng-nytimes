import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from '../../../../shared/services/api.service';
import { apiServiceMockResponse } from '../../../../shared/services/api.service.spec.mock';
import { SharedModule } from '../../../../shared/shared.module';
import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ section: 'home' }),
          },
        },
      ],
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
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

    expect(component.section).toEqual('home');
    expect(component.stories.length).toEqual(4);
    expect(component.isLoading).toBeFalsy();
  });
});
