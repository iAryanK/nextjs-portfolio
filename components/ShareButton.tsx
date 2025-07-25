import { Share2 } from "lucide-react";
import React from "react";
import { toast } from "./ui/use-toast";
import { importantLinks } from "@/data";

const ShareButton = ({ className }: { className?: string }) => {
  const handleShare = () => {
    if (!navigator.share) {
      return toast({
        title: "Oops, Something went wrong!",
        description: "Probably, your device doesn't support web share API.",
      });
    }

    return navigator.share({
      title: "Aryan | Portfolio",
      text: "Visit now, to explore this portfolio.",
      url: importantLinks.portfolioWebsite,
    });
  };

  return (
    <Share2
      size={24}
      className={`cursor-pointer hover:scale-110 hover:opacity-75  transition ease-in-out ${className}`}
      onClick={handleShare}
    />
  );
};

export default ShareButton;
