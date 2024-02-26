
import {create} from 'zustand';

interface LoginSuccessPayload {
  userName: string;
  password: string;
  userFirstName?: string;
  userLastName?: string;
  userEmailAddress?: string;
  userPhoneNumber?: string;

}

interface UserStore {
    loggedIn: boolean;
    userName: string;
    password: string;
    userFirstName: string;
    userLastName: string;
    userEmailAddress: string;
    userPhoneNumber: string;
 
  
    updateZipCode: (newZipCode: any) => void;
    updateLoginResponse: (loginPayload: LoginSuccessPayload) => void;
    updateLoginStatus: (loggedInStatus: boolean) => void;
  }
  
  export const useUserStore = create<UserStore>((set) => ({
    loggedIn: false,
    userName: '',
    password: '',
    userFirstName: '',
    userLastName: '',
    userEmailAddress: '',
    userPhoneNumber: '',
    
    updateZipCode: (newZipCode: string) => set({}),
    updateLoginResponse: (loginPayload: LoginSuccessPayload) =>
      set({
        userName: loginPayload.userName,
        password: loginPayload.password,
      
        userFirstName: loginPayload.userFirstName,
        userLastName: loginPayload.userLastName,
        userEmailAddress: loginPayload.userEmailAddress,
        userPhoneNumber: loginPayload.userPhoneNumber,
      }),
    updateLoginStatus: (loggedInStatus: boolean) =>
      set({
        loggedIn: loggedInStatus,
      }),
  }));
  