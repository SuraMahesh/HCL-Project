export interface AdminCreateData {
  name: string;
  email: string;
  password: string;
  profileImage: string;
}

export interface CreatorCreateData {
  name: string;
  email: string;
  phone: number;
  password: string;
  profileImage: string;
}

export interface GiverCreateData {
  name: string;
  email: string;
  phone: number;
  password: string;
  profileImage: string;
}

export interface AdminUpdateData {
  adminId: string;
  name: string;
  email: string;
  password: string;
  profileImage: string;
}

export interface CreatorUpdateData {
  creatorId: string;
  name: string;
  email: string;
  phone: number;
  password: string;
  profileImage: string;
}

export interface GiverUpdateData {
  giverId: string;
  name: string;
  email: string;
  phone: number;
  password: string;
  profileImage: string;
}
