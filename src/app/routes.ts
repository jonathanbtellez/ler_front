import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    title: 'User detail'
  }
]


export default routeConfig;
