import { User } from "./user";

export interface ContributionResponse {
  id: string;
  userId: string;
  grantId: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
}
