"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Toggle } from "./ui/toggle";
export const topics = [
  "Technology",
  "Gaming",
  "Entertainment",
  "Sports",
  "Science",
  "Politics",
  "Education",
  "Lifestyle",
  "Travel",
  "Health",
  "Art",
  "Music",
  "Movies",
  "Books",
  "Culture",
  "Fashion",
  "Environment",
  "News",
];
export default function Topicoption({
  addtopic,
  topicarray,
  removetopic,
  min="3"
}: {
  addtopic: (newtopic: string) => void;
  removetopic: (removetopic: void) => void;
  topicarray: Array<string>;
  min?:string
}) {
  return (
    <Card className="gap-1 px-2">
      <CardTitle>What topic are you gonna cover?</CardTitle>

      <CardDescription className="my-1 -mt-1 py-0">
        Choose the topics that you are going to cover in your story (MIN {min})
      </CardDescription>

      <CardContent className="flex flex-wrap gap-1 flex-row border-b-2 pb-3 px-0 w-full mb-2">
        {topics.map((topic) => (
          <Toggle
            variant={"default"}
            size={"sm"}
            disabled={topicarray.length >= Number(min)}
            onPressedChange={() => addtopic(topic)}
            className={cn(
              "w-max px-2 ",
              topicarray.some((item) => item.toLowerCase() === topic.toLowerCase())&&
                "bg-red-500! text-white border-white!",
            )}
            key={topic}
          >
            {topic}
          </Toggle>
        ))}
      </CardContent>
      {topicarray.length >=Number(min) && (
        <Button
          onClick={() => removetopic()}
          className={"w-max"}
          variant={"destructive"}
          size={"sm"}
        >
          {" "}
          reset topic{" "}
        </Button>
      )}
    </Card>
  );
}
