import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PanelComponent } from './panel.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './projects/projects.component';
import { KanbanComponent } from './kanban/kanban.component';

@NgModule({
  declarations: [
    PanelComponent,
    HomeComponent,
    NotesComponent,
    ProjectsComponent,
    KanbanComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PanelModule { }
