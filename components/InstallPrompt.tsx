"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const InstallPrompt = () => {
  const [prompt, setPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setPrompt(event);

      if (!window.matchMedia("(display-mode:standalone)").matches) {
        setShowPrompt(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallApp = () => {
    if (prompt) {
      prompt.prompt();
      setPrompt(null);
    }
  };

  return (
    <div className={`${showPrompt ? "block" : "hidden"} p-2 mx-auto`}>
      <div className={`bg-blue-500 dark:bg-blue-800 rounded-md`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto py-3 px-5 sm:px-8">
          <div className="max-sm:hidden text-white">
            Install the app to get a native app experience on your device !
          </div>

          <div className="sm:hidden">
            <p className="font-semibold text-base">Add to home screen</p>
            <p className="text-xs">Get a native app experience!</p>
          </div>

          <Button
            className="h-8 bg-white hover:bg-white/80 text-black"
            onClick={handleInstallApp}
          >
            Install
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
