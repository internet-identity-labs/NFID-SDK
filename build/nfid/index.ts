declare const FRONTEND_MODE: string;
declare const II_ENV: string;
declare const INTERNET_IDENTITY_CANISTER_ID: string;
declare const IDENTITY_MANAGER_CANISTER_ID: string;
declare const PUB_SUB_CHANNEL_CANISTER_ID: string;
declare const USERGEEK_API_KEY: string;
(window as any).FRONTEND_MODE = FRONTEND_MODE;
(window as any).II_ENV = II_ENV;
(window as any).IC_HOST = window.location.origin;
(window as any).INTERNET_IDENTITY_CANISTER_ID = INTERNET_IDENTITY_CANISTER_ID;
(window as any).IDENTITY_MANAGER_CANISTER_ID = IDENTITY_MANAGER_CANISTER_ID;
(window as any).PUB_SUB_CHANNEL_CANISTER_ID = PUB_SUB_CHANNEL_CANISTER_ID;
(window as any).USERGEEK_API_KEY = "";
(window as any).VERIFIER_CANISTER_ID = "5yjgb-gyaaa-aaaao-aabwa-cai";
(window as any).SENTRY_RELEASE = "NFID-SDK";
(window as any).GOOGLE_CLIENT_ID =
  "339872286671-87oou3adnvl7hst9gd90r9k7j6enl7vk.apps.googleusercontent.com";
