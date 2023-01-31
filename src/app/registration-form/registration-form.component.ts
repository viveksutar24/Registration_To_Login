import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  signUpArray: any = [] = []
  signUpObj: any = {
    name: '',
    email: '',
    password: ''
  }


  ngOnInit(): void {

    let localdata = localStorage.getItem("signUpUSers");
    if (localdata != null) {
      this.signUpArray = JSON.parse(localdata);
    }

  }


  onSignUp() {
    this.signUpArray.push(this.signUpObj);
    localStorage.setItem("signUp", JSON.stringify(this.signUpArray))
    console.log(this.signUpArray);
    this.signUpObj = {
      name: '',
      email: '',
      password: ''
    }

  }





  loginObj: any = {
    username: '',
    password: ''
  }



  onLogin() {
    // alert("hello");
    // debugger
    // console.log(this.loginObj)
    const isUserExist = this.signUpArray.find((m: any) => m.username == this.loginObj.username && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert("Login Successfull !!!");
    }
    else {
      alert("Wrong Credentials !!");
    }
  }

}
