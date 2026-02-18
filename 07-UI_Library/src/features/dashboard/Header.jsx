import { useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { pathname } = useLocation();

  const getTitle = () => {
    if (pathname === "/dashboard") return "Overview";
    if (pathname === "/dashboard/reports") return "Reports";
    if (pathname === "/dashboard/settings") return "Settings";
    return "";
  };

  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <h1 className="font-semibold">{getTitle()}</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="cursor-pointer">
            <Avatar>
              <AvatarFallback>VM</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
