import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Page not found"', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h2')?.textContent).toEqual('Page not found');
  });

  it('should render "Go to homepage" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('a')?.textContent).toContain(
      ' Go to homepage '
    );

    expect(compiled.querySelector('a')?.getAttribute('href')).toEqual('/');
  });
});
