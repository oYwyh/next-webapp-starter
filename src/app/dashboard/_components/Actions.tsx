import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
// import Edit from "./Edit";
import { useState } from "react";
import Delete from "@/app/dashboard/_components/Delete";
import { Row } from "@tanstack/react-table";
import Link from "next/link";
import Edit from "@/app/dashboard/_components/Edit";

export default function Actions({ row, rowData }: { row: Row<any>, rowData: any }) {
    const [open, setOpen] = useState<boolean>();

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel >Actions</DropdownMenuLabel>
                <div className="flex flex-col gap-2 w-full">
                    <Edit
                        userId={row.getValue('id')}
                        userData={rowData}
                        setPopOpen={setOpen}
                    />
                    <Delete
                        id={row.getValue('id')}
                        setPopOpen={setOpen}
                    />
                </div>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}