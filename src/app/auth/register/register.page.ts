import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { UsertypeService } from '../../services/usertype.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router, private  storage:  Storage, private userService: UsertypeService) { }

  etapa: number = 2;
  type : string;

  ngOnInit() {
    this.storage.get('UserType').then((val) => {
      this.type = val;
    });
  }

  setEtapa(etapa) {
    this.etapa = etapa;
  }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
  
}
