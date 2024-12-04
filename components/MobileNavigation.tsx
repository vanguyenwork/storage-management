"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";
import { signoutUser } from "@/lib/actions/user.actions";

interface Props {
  ownerId: string;
  accountId: string;
  fullName: string;
  email: string;
  avatar: string;
}

const MobileNavigation = ({
  ownerId,
  accountId,
  fullName,
  email,
  avatar,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <Image
        src="/assets/icons/logo-full-brand.svg"
        alt="logo"
        width={120}
        height={52}
        className="h-auto"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            width={30}
            height={30}
            alt="Search"
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="lg:w-full">
                  <Link
                    href={item.url}
                    className={cn(
                      "mobile-nav-item",
                      pathname === item.url && "shad-active",
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                      className={cn(
                        "nav-icon",
                        pathname === item.url && "nav-icon-active",
                      )}
                    />
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-light-200/20" />
          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader ownerId={ownerId} accountId={accountId} />
            <Button
              onClick={async () => await signoutUser()}
              type="submit"
              className="mobile-sign-out-button"
            >
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
