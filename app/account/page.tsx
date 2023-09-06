import AccountDashboard from "@/components/account-dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account - Lals - Chocolate and Gifting Brand in Pakistan",
};

const fetchUsers = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_USERS as string, {
      cache: "no-store",
    });

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Account() {
  const { users } = await fetchUsers();

  return <AccountDashboard users={users} />;
}
