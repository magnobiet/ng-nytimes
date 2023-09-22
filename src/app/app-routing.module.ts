import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then(
        ({ HomeModule }) => HomeModule
      ),
  },
  {
    path: 'section',
    loadChildren: () =>
      import('./features/section/section.module').then(
        ({ SectionModule }) => SectionModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/error/error.module').then(
        ({ ErrorModule }) => ErrorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
