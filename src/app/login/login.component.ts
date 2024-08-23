import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Keyboard from "simple-keyboard";
import { LoginModel } from '../models/login.model';
import { IdentityService } from '../services/identity.service';
import { ApiService } from '../services/api-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginmodel: LoginModel = new LoginModel();
  typeInputPass: string = 'password';
  isVirtualKeyboard: boolean = false;
  value = "";
  keyboard: Keyboard;
  userName: string = "";
  password: string = "";
  isAdmin: boolean;
  isPassTrue: boolean;
  userPassMassageError: string = "";

  constructor(private router: Router, private apiService: ApiService,
    private identityService: IdentityService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    const div = document.createElement('div');
    div.className += "simple-keyboard";
    document.body.appendChild(div);
  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  login() {
    this.loginmodel = new LoginModel();
    this.loginmodel.userName = this.userName;
    this.loginmodel.password = this.password;
    this.apiService.Login(this.loginmodel).subscribe((response: any) => {
      if (response.result == true) {
        localStorage.setItem('token', response.content.token);
        this.identityService.setIdentity(response.content.userName, []);
        this.router.navigate(['navbar/dashboard'])
      } else {
        this.toastr.error(response.errorMessages)
      }
    })
  }

  @HostListener('keydown', ['$event'])
  
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code =='Enter') {
      this.login();
    }
  }

  showPass() {
    this.typeInputPass = 'password';
  }

  showText() {
    this.typeInputPass = 'text';
  }
  
  onChange = (input: string) => {
    this.value = input;
  };

  onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  activeVirtualKeyboard() {
    this.isVirtualKeyboard = !this.isVirtualKeyboard
  }

}
