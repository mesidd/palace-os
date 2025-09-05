"use client"
import * as React from "react"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    // DialogHeader
} from "@/components/ui/dialog"

import { Terminal } from "@/components/terminal";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import { useTerminalStore } from "@/stores/terminalStore";

export function TerminalDialog() {
    const {isOpen, close, toggle} = useTerminalStore();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "b" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                toggle();
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={close} >
            <DialogContent className="p-0">
                    <VisuallyHidden>
                        <DialogTitle>Terminal</DialogTitle>
                    </VisuallyHidden>
                <Terminal />
            </DialogContent>
        </Dialog>
    );
}
