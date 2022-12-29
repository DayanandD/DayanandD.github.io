import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'create',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
