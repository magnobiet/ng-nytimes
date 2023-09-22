import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';

const modules = [HomeModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class FeaturesModule {}
