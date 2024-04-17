import { Component } from '@angular/core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = 'Asisweb';
  faSignIn = faSignIn; 
}
