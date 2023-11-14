import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotocomponentComponent } from './fotocomponent/fotocomponent.component'

const routes: Routes = [
  {path: '',component: FotocomponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
