"use client";

import { Createprofile, CreateProfileState } from "@/actions/profile";
import Profilecreation from "./profile-creation";
import Textinput from "./text-input";
import Topicoption from "./topic-option";
import { Button } from "./ui/button";
import { useActionState, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Spinner } from "./ui/spinner";

export default function Profileform() {
  const [topic, settopic] = useState<Array<string>>([]);
  const [state, action, pending] = useActionState<CreateProfileState, FormData>(
    Createprofile.bind(null, topic),
    null,
  );
  function addtopic(newtopic: string): void {
    if (!topic.includes(newtopic) && topic.length !== 3) {
      settopic((prev) => [...prev, newtopic]);
    }
  }
  function removetopic() {
    settopic([]);
  }
  console.log(state);
  useEffect(() => {
    if (state?.success) {
      redirect("/profile");
    }
  });
  return (
    <form action={action} className="gap-4 flex flex-col items-center px-3">
      <Profilecreation />
      <Textinput />
      <Topicoption
        removetopic={removetopic}
        topicarray={topic}
        addtopic={addtopic}
      />
      <Button
        type="submit"
        variant={"default"}
        className={`capitalize text-xl`}
        size={"lg"}
        disabled={pending}
      >
        {" "}
       { pending ? "loading" : "create profile"}
       {pending && <Spinner/>}
       {" "}
      </Button>
    </form>
  );
}
