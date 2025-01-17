import { User } from "./user.interface";

export interface UsersResponse {
  status: string;
  data: User[];
}
