import { AuthProvider } from "../app/demos/samples/auth/AuthProvider";

export const environment = {
  production: false,
  authEnabled: false,
  title: "ngSecurity",
  provider: AuthProvider.Firebase,
  firebaseConfig: {
    apiKey: "AIzaSyAOdenXy2X7kx9LWwVHk9zn3Humr2Cl9Tc",
    authDomain: "vouchers-c334a.firebaseapp.com",
    databaseURL: "https://vouchers-c334a.firebaseio.com",
    projectId: "vouchers-c334a",
    storageBucket: "vouchers-c334a.appspot.com",
    messagingSenderId: "269739409229"
  },
  o365Config: {
    tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
    clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
    cacheLocation: "localStorage",
    endpoints: {
      graphApiUri: "https://graph.microsoft.com",
      sharePointUri: "https://integrationsonline.sharepoint.com" // Replace "integrationsonline" with your Tenant-Name & Make sure you assign permissions in Azure AD and enable Implicit Flow
    },
    returnUrl: "http://localhost:4200"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
