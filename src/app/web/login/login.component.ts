import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: new FormControl('admin@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder, private router: Router,
    private loginServices: LoginService,
  ){}

  ngOnInit() {
  }

  login() {
    if(this.loginForm.valid) { 
      this.loginServices.login(this.loginForm.value); 
      console.log(this.loginForm.value);
      this.router.navigateByUrl('/panel/dashboard')
    }else{
      alert("Faltan campos por rellenar");
    }
  }
}

