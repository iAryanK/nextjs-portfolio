"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMediaQuery from "@/hooks/use-media-query";
import { MagicButton } from "./aceternity/StyledButton";
import { FaLocationArrow } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactDrawerDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="max-sm:w-full">
          <MagicButton
            title="Send a Quick Note"
            icon={<FaLocationArrow />}
            position="right"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Quick Note</DialogTitle>
            <DialogDescription>
              Hey! I&apos;m glad that you&apos;re here. Feel free to send me a
              quick note about anything.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="max-sm:w-full">
        <MagicButton
          title="Send a Quick Note"
          icon={<FaLocationArrow />}
          position="right"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center text-white">
            Quick Note
          </DrawerTitle>
          <DrawerDescription className="text-left">
            Hey! I&apos;m glad that you&apos;re here. Feel free to send me a
            quick note about anything.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-white">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="No disposable email please 😅"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="note" className="text-white">
          Your message
        </Label>
        <Textarea id="note" placeholder="Write here..." />
      </div>
      <Button type="submit">Send Note</Button>
    </form>
  );
}
