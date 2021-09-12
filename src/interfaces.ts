interface IAdress {
  streetAddress: string;
  city: string;
  state: string;
  zip: number;
}

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: IAdress;
  description: string;
}

interface IRow {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
}

export type { IUser, IAdress, IRow }