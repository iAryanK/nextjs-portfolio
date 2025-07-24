/* eslint-disable react/no-children-prop */
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "../ui/input";
import { Loader2, Send } from "lucide-react";
import { Button } from "../ui/button";
import { useChat } from "@ai-sdk/react";
import { ScrollArea } from "../ui/scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef } from "react";

const AI_Agent = () => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    stop,
    reload,
    error,
    isLoading,
  } = useChat({
    api: "/api/gemini",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Dialog>
      <DialogTrigger className="z-50">
        <Image
          src="/images/glass-sphere.gif"
          alt="AI Agent"
          width={50}
          height={50}
          quality={10}
        />
      </DialogTrigger>
      <DialogContent className="max-md:h-[95%] h-[60%] md:top-[60%] md:left-[70%] lg:left-[80%] xl:left-[85%] md:max-w-sm">
        <div className="h-full w-full space-y-2">
          <DialogHeader className="h-[10%]">
            <DialogTitle>Hey, I&apos;m Romanica</DialogTitle>
            <DialogDescription>Aryan&apos;s AI assistant.</DialogDescription>
          </DialogHeader>

          <ScrollArea className="h-[500px] md:h-[350px] w-full flex flex-col items-center justify-start gap-4 border-t overflow-y-auto no-scrollbar pt-2">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-10">
                <Image
                  src="/images/glass-sphere.gif"
                  alt="AI Agent"
                  width={150}
                  height={150}
                  quality={10}
                  className="opacity-40"
                />
                <p className="text-muted-foreground">
                  Ask me anything about Aryan.
                </p>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className="flex gap-2 w-full items-start mb-4">
                <p className="text-sm w-[10%]">
                  {message.role !== "user" ? (
                    <div className="flex justify-center">
                      <Image
                        src="/images/glass-sphere.gif"
                        alt="AI Agent"
                        width={40}
                        height={40}
                        quality={50}
                      />
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Image
                        src="/images/boy-smiley.png"
                        alt="User"
                        width={36}
                        height={36}
                        quality={50}
                        className="rounded-full"
                      />
                    </div>
                  )}
                </p>
                <div className="text-sm w-[90%] font-light prose dark:prose-invert pr-2">
                  <ReactMarkdown
                    children={message.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      // @ts-ignore
                      code({ node, inline, className, children, ...props }) {
                        return inline ? (
                          <code
                            {...props}
                            className={"border rounded-md px-1 text-wrap"}
                          >
                            {children}
                          </code>
                        ) : (
                          // @ts-ignore
                          <pre
                            {...props}
                            className={"border rounded-md px-1 text-wrap"}
                          >
                            <code>{children}</code>
                          </pre>
                        );
                      },

                      ul: ({ children }) => (
                        <ul className="list-disc list-inside">{children}</ul>
                      ),

                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside">{children}</ol>
                      ),
                    }}
                  />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="w-full items-center flex justify-center gap-3">
                <Loader2 className="animate-spin h-5 w-5" />
                <Button type="button" variant={"link"} onClick={() => stop()}>
                  abort
                </Button>
              </div>
            )}
            {error && (
              <div className="w-full text-center flex flex-col items-center justify-center">
                <p className="text-xs">An Error occured.</p>
                <Button
                  type="button"
                  variant={"link"}
                  size={"link"}
                  className="highlight"
                  onClick={() => reload()}
                >
                  Retry
                </Button>
              </div>
            )}

            <div ref={scrollRef}></div>
          </ScrollArea>

          <form
            className="flex gap-2 items-center w-full h-[10%]"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="w-full bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              variant={"outline"}
              type="submit"
              size={"icon"}
              className="border p-2 rounded cursor-pointer opacity-60"
            >
              <Send />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AI_Agent;
