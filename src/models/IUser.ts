export interface Role {
  id: number;
  name: string;
  __entity: string;
}

export interface Status {
  id: number;
  name: string;
  __entity: string;
}

export interface User {
  id: number;
  email: string;
  provider: string;
  socialId?: any;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
  photo?: any;
  role: Role;
  status: Status;
  __entity: string;
}

export interface IUser {
  token: string;
  user: User;
}
