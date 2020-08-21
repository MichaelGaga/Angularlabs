import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit(): void {
  }
  
  loginUser($event) {
    let users = [{"email":"abc@me.com","password":"123"},{"email":"molly@me.com","password":"333"},{"email":"sam@me.com","password":"222"}]
    let usrAcc = 0;
    event.preventDefault();
    console.log(this.email);
    
    for (let i = 0;i<users.length;i++) {
      if (this.email == users[i].email && this.password == users[i].password){ 
          usrAcc++;
      }
  }
  if (usrAcc < 1) {
    alert("no matches found!")
  } else { 
    this.router.navigateByUrl('/account');}
  }
}
