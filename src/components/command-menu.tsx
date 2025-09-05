"use client"
import * as React from "react"
import { useTerminalStore } from "@/stores/terminalStore";
import { useRouter } from "next/navigation"
import {
  Home,
  Linkedin,
  Github,
  Moon,
  Sun,
  Laptop,
  BookOpen,
  Mail,
  Gem,
  Terminal
} from "lucide-react"
import { useTheme } from "next-themes"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
interface Props {
  // Add any props you need
}

export function CommandMenu(props: Props) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const { open: openTerminal } = useTerminalStore();
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => unknown) => {
    setOpen(false)
    command()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/manifesto"))}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Manifesto</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/projects"))}>
            <Gem className="mr-2 h-4 w-4" />
            <span>Treasury</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Contact</span>
          </CommandItem>
          <CommandItem onSelect={()=> runCommand(openTerminal)}>
            <Terminal className="mr-2 h-4 w-4" />
            <span>Terminal</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/your-username", "_blank"))}>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/your-profile", "_blank"))}>
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
            </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

