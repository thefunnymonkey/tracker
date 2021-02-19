import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "admin"
  password = "dummy"
  errorMessage = "Invalid Credentials Idiot, try again stupid poop idiot"
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }
  handleLogin(){
    console.log("i was clicked by:" + this.username)
    if(this.username==="admin"&& this.password==='dummy'){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
    }
  }

}
