import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return redirect("/sign-in");
  }
  const { fullName, avatar, email } = currentUser;
  return (
    <main className="flex h-screen">
      <Sidebar fullName={fullName} avatar={avatar} email={email} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation
          fullName={currentUser.fullName}
          avatar={currentUser.avatar}
          ownerId={currentUser.$id}
          email={currentUser.email}
          accountId={currentUser.accountId}
        />
        <Header ownerId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
