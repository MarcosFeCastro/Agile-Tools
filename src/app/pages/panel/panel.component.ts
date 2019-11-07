import { Component, OnInit } from '@angular/core';

import { LocalUser } from './../../models/local_user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  name: LocalUser = null;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    this.name = this.authService.getLocalUser();
  }

  save(){
    console.log("Salvando");
  }

}
