import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function RadixDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
          Open Menu
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="min-w-40 rounded-md border bg-background p-1 shadow-md"
        >
          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 text-sm hover:bg-muted">
            Profile
          </DropdownMenu.Item>

          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 text-sm hover:bg-muted">
            Settings
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          <DropdownMenu.Item className="cursor-pointer rounded px-3 py-2 text-sm text-destructive hover:bg-muted">
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
