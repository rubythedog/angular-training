import { Injectable } from '@angular/core';

interface User {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get registeredUsers(): User[] {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
  set registeredUsers(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  get currentUser(): string {
    return sessionStorage.getItem('currentUser');
  }
  set currentUser(email: string) {
    sessionStorage.setItem('currentUser', email);
  }

  constructor() { }

  register(email: string, password: string) {
    const newUsers = this.registeredUsers;
    newUsers.push({email: email, password: password});
    this.registeredUsers = newUsers;
  }

  login(email: string, password: string) {
    const user = this.registeredUsers
      .find(user => user.email === email && user.password === password);
    if (user) this.currentUser = email;
  }

  logout() {
    sessionStorage.removeItem('user');
  }
}
