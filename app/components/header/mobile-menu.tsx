import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { IconMenu } from "../icons/icon-menu"
import { JSX } from "react"

export function MobileMenu({
  navListContent,
}: {
  navListContent: JSX.Element[]
}) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="px-2">
            <IconMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-auto ps-4 pe-10">
          <SheetHeader>
            <SheetTitle>{/* Menu */}</SheetTitle>
            <SheetDescription>
              {/* Make changes to your profile here. Click save when you&apos;re
                done. */}
            </SheetDescription>
          </SheetHeader>
          <ul className="px-4 flex flex-col gap-4">{navListContent}</ul>
          {/* <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  )
}
