import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../../../services/project.service';
import { Project } from 'src/app/models/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  project: Project;

  cardForm: FormGroup;
  submitted: boolean = false;

  constructor( private projectService: ProjectService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.project = this.projectService.getCurrentProject();
    if ( this.project == null ) {
      this.router.navigate(['/projetos']);
    }
    this.createForm();
  }

  createForm() {
    this.cardForm = this.formBuilder.group({
      content: [ null, [Validators.required, Validators.minLength(1), Validators.maxLength(250)] ],
      deadline: [ null ],
      status: [ 'todo', [Validators.required] ],
      color: [ 'card-white', [Validators.required] ]
    });
  }

  hasErrorForm( field: string ) {
    return this.cardForm.get( field ).errors;
  }

  checkColor() {
    return this.cardForm.value.color;
  }

  setNoteColor( color: string ) {
    this.cardForm.controls['color'].patchValue( color );
  } 

  ngOnDestroy() {
    this.projectService.setCurrentProject( null );
  }

  onSubmit() {
    this.submitted = true;
    if ( this.cardForm.valid ) {
      try {
        if ( this.project.cards == null ) {
          this.project.cards = [ this.cardForm.value ];
        } else {
          this.project.cards.push( this.cardForm.value );
        }
        this.projectService.updateProject( this.project );
        this.project = this.projectService.getCurrentProject();
      } catch( error ) {
        console.error( error );
      } finally {
        this.cardForm.reset();
        this.createForm();
        this.submitted = false;
        console.log( "Card criado!" );
      }
    }
  }

  updateCard( card: any, status: string ) {
    for ( let i = 0; i < this.project.cards.length; i++ ) {
      if ( card == this.project.cards[i] ) {
        this.project.cards[i].status = status;
        this.projectService.updateProject( this.project );
      }
    }
  }

  deleteCard( card: any ) {
    for ( let i = 0; i < this.project.cards.length; i++ ) {
      if ( card == this.project.cards[i] ) {
        this.project.cards.splice( i, 1 );
        this.projectService.updateProject( this.project );
      }
    }
  }
  
}
