import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.modules';
import { IndexComponent } from './pages/index/index.component';

const components = [IndexComponent];

const modules = [CommonModule, SharedModule, HomeRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class HomeModule {}
