import AccountDashboard from "@/components/account-dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account - Lals - Chocolate and Gifting Brand in Pakistan",
};

export default async function Account() {
  return <AccountDashboard />;
}
