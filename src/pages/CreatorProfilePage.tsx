import * as React from "react";
import CreatorPage from "../components/Profiles/Creator/Creator";
import SecurityPage from "../components/Profiles/Creator/Security";
import NotificationsPage from "../components/Profiles/Creator/Notifications";
import AccountSettingsPage from "../components/Profiles/Creator/Accountsettings";
import BillingPage from "../components/Profiles/Creator/Billing";

export interface CreatorProfileProps {}

const CreatorProfile: React.SFC<CreatorProfileProps> = () => {
  return (
    <div className="container">
      <CreatorPage />
      <AccountSettingsPage />
      <SecurityPage />
      <NotificationsPage />
      <BillingPage />
    </div>
  );
};

export default CreatorProfile;
