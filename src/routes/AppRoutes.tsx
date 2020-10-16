import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TestPage from "../pages/TestPage";
import SignupPage from "../pages/SignupPage";
import CreatorProfilePage from "../components/Profiles/Creator/Creator";
import AccountSettingsPage from "../components/Profiles/Creator/Accountsettings";
import SecurityPage from "../components/Profiles/Creator/Security";
import NotificationsPage from "../components/Profiles/Creator/Notifications";
import BillingPage from "../components/Profiles/Creator/Billing";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/test", component: TestPage },
  { path: "/signup", component: SignupPage },
  { path: "/creatorprofile", component: CreatorProfilePage },
  { path: "/accountsettings", component: AccountSettingsPage },
  { path: "/security", component: SecurityPage },
  { path: "/notifications", component: NotificationsPage },
  { path: "/billing", component: BillingPage },
];
