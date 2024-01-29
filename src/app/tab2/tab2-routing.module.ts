import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesSearchComponent } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: StoriesSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
