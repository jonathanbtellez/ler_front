import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../core/service/user.service';
import { User } from '../core/interfaces/user.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-detail',
  imports: [RouterModule, MatIconModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  private readonly userId;
  protected user: User | undefined;
  constructor(private readonly route: ActivatedRoute, private readonly userSevice: UserService) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userSevice.getUserById(this.userId).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data.data;
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    });
}
}
