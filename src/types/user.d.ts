export type Role = "Admin" | "Regular";

export type Status = "Active" | "Inactive";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  createdAt: Date;
};
