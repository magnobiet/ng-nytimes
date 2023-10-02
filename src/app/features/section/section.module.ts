import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './pages/index/index.component';
import { SectionRoutingModule } from './section-routing.modules';

const components = [IndexComponent];

const modules = [CommonModule, SharedModule, SectionRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class SectionModule {}
