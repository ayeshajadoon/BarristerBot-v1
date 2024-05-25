"use client";

import { useChat } from "ai/react";
import { useMemo } from "react";
import Image from "next/image";
import { insertDataIntoMessages } from "../transform";


export default function SideSection() {
  const {
    messages,
    input,
    isLoading,
    handleSubmit,
    handleInputChange,
    reload,
    stop,
    data,
  } = useChat({
    api: process.env.NEXT_PUBLIC_CHAT_API,
    headers: {
      "Content-Type": "application/json", // using JSON because of vercel/ai 2.2.26
    },
  });

  const transformedMessages = useMemo(() => {
    return insertDataIntoMessages(messages, data);
  }, [messages, data]);

  return (
    <div className="space-y-4 w-2/6">
      
      
      <a
          href=""
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          
          <Image
            className="rounded-xl"
            src="/bot_logo.png"
            alt="bot Logo"
            width={300}
            height={300}
          />
        </a>

        <h1>Let's talk law. Tell BarristerBot what's happening.</h1>
    </div>
  );
}
