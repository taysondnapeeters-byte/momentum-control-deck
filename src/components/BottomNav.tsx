import { Link } from "@tanstack/react-router";
import {
  Bot,
  FolderClosed,
  Gamepad2,
  LayoutGrid,
  MapPin,
  Settings as SettingsIcon,
  Smartphone,
} from "lucide-react";

const ITEMS = [
  { to: "/", label: "Deck", icon: LayoutGrid, exact: true },
  { to: "/device", label: "Device", icon: Smartphone, exact: false },
  { to: "/ai", label: "AI", icon: Bot, exact: false },
  { to: "/files", label: "Files", icon: FolderClosed, exact: false },
  { to: "/virtual-flipper", label: "Virtual", icon: Gamepad2, exact: false },
  { to: "/geo", label: "Geo", icon: MapPin, exact: false },
  { to: "/settings", label: "Settings", icon: SettingsIcon, exact: false },
] as const;

export function BottomNav() {
  return (
    <nav
      aria-label="Main sections"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-xl items-stretch justify-between px-1 py-1.5">
        {ITEMS.map(({ to, label, icon: Icon, exact }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              activeOptions={{ exact }}
              className="tap-scale group flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-0.5 py-1.5 text-muted-foreground data-[status=active]:bg-surface-2 data-[status=active]:text-signal"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
