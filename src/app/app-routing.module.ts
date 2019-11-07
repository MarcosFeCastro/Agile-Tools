import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/panel/home/home.component';
import { NotesComponent } from './pages/panel/notes/notes.component';
import { LocalUserGuard } from './guards/local-user.guard';
import { ProjectsComponent } from './pages/panel/projects/projects.component';
import { KanbanComponent } from './pages/panel/kanban/kanban.component';

const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [LocalUserGuard] },
  { path: 'notas', component: NotesComponent, canActivate: [LocalUserGuard] },
  { path: 'projetos', component: ProjectsComponent, canActivate: [LocalUserGuard] },
  { path: 'kanban', component: KanbanComponent, canActivate: [LocalUserGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
