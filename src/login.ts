import { TabsPage } from './pages/tabs/tabs';
import { VerificationPage } from './pages/verification/verification';

export namespace Login {
  // replace with your key
  export const firebaseConfig = {
    apiKey: "AIzaSyDN6WmBnJGfN64BnR-r4TW9V8N1IHgps1w",
    authDomain: "chatapp-3f829.firebaseapp.com",
    databaseURL: "https://chatapp-3f829.firebaseio.com",
    projectId: "chatapp-3f829",
    storageBucket: "chatapp-3f829.appspot.com",
    messagingSenderId: "845839389008"
  };
  export const facebookAppId: string = "767580770058358";
  export const googleClientId: string = "478860799652-526uf84nsn4jfjg0l2trbivm1676ohgb.apps.googleusercontent.com";
  export const homePage = TabsPage;
  export const verificationPage = VerificationPage;
  export const emailVerification: boolean = true;
}

