import { AnyAction } from "redux";

export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});

export interface IUsers {
  user: IUser[] | undefined;
}

export interface IUser {
 
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };

}

export const setUser = (user: IUsers) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user: user };

    default:
      return state;
  }
};
