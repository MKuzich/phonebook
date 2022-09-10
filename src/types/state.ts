import { Contacts } from './contacts';
import { IUser } from './user';

export interface IState {
  contacts: {
    queries: {
      data: Contacts;
    };
  };
  auth: {
    user: IUser;
    token: string;
  };
}
