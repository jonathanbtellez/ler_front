import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../core/interfaces/user.interface';
import { UserService } from '../core/service/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public users: User[] = [];
  constructor(private readonly userService: UserService) { }

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
