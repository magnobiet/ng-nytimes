import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShellComponent } from './components/shell/shell.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const components = [
  LogoComponent,
  MenuComponent,
  ShellComponent,
  FooterComponent,
  HeaderComponent,
  SpinnerComponent,
];

const modules = [CommonModule, HttpClientModule, RouterModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
