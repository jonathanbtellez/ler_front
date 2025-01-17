import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './core/interfaces/user.interface';
import { UserService } from './core/service/user.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  public users: User[] = [];
  constructor(private readonly userService: UserService) { }
  title = 'Ler coding challenge';
  image = 'https://lerprevencion.co/wp-content/uploads/2023/02/logo-web_Mesa-de-trabajo-1.png';

  ngOnInit(): void {
      this.userService.getUsers().subscribe({
        next: (data) => {
          this.users = data.data;
        },
        error: (error) => {
          console.error('Error fetching users', error);
        }
      });
  }
}
