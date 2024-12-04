import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signoutUser } from "@/lib/actions/user.actions";

interface HeaderProps {
  accountId: string;
  ownerId: string;
}
const Header = ({ ownerId, accountId }: HeaderProps) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader accountId={accountId} ownerId={ownerId} />
        <form
          action={async () => {
            "use server";
            await signoutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              className="w-6"
              width={24}
              height={24}
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
