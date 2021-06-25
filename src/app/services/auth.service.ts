import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails() {
    let userData = localStorage.getItem('userData') 
    if (userData) {
      return JSON.parse(userData)
    } else {
      return null
    }
  }
    
  setDataInLocalStorage(variableName, data) {
    localStorage.setItem(variableName, data);
  }
  
  getToken() {
    return localStorage.getItem('token');
  }
  
  clearStorage() {
    localStorage.clear();
  }
}
