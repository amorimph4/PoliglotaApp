import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor() { }

  private userType:  string;

  setUserType(type) {
  	this.userType = type;
  }

  getUserType() {
  	return this.userType
  }
}
