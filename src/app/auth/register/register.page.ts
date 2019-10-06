import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Storage } from  '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router, private  storage:  Storage) { }

  type : string;

  ngOnInit() {
    this.storage.get('UserType').then((val) => {
      console.log('Your age is', val);
      this.type = val;
    });
  }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
  
}
