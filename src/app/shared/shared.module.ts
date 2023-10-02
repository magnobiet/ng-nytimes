import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShellComponent } from './components/shell/shell.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';

const components = [
  LogoComponent,
  MenuComponent,
  ShellComponent,
  FooterComponent,
  HeaderComponent,
  SpinnerComponent,
];

const modules = [CommonModule, HttpClientModule, RouterModule];

const providers = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
  providers: [...providers],
})
export class SharedModule {}
