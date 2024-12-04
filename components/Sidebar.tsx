"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  fullName: string;
  email: string;
  avatar: string;
}

const Sidebar = ({ fullName, email, avatar }: Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          className="hidden h-auto lg:block"
          alt="logo"
          width={160}
          height={50}
        />

        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.name} className="lg:w-full">
              <Link
                href={item.url}
                className={cn(
                  "sidebar-nav-item",
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
                <p className="hidden lg:block">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      />
      <div className="sidebar-user-info">
        <Image
          src={avatar}
          width={44}
          height={44}
          alt="avatar"
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
