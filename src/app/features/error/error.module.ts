import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorRoutingModule } from './error-routing.modules';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const components = [NotFoundComponent];

const modules = [CommonModule, SharedModule, ErrorRoutingModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class ErrorModule {}
