import { User } from "./user.interface";

export interface UserResponse {
  status: string;
  data: User;
}
