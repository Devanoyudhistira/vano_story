"use client";

import { Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Profilecreation({
  className,
  oriimage,
}: {
  className?: string;
  oriimage?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [change, setchange] = useState<string | null>(oriimage ?? null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setchange(url);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setchange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Card className="gap-1 py-1.5 mb-2 items-center">
      <CardTitle className="text-lg font-semibold ml-4 capitalize">
        {" "}
        profile photo{" "}
      </CardTitle>
      <CardContent className="flex-row  lg:items-center lg:flex-col gap-1 px-1">
        <div
          className={cn(
            "w-26 lg:w-40 lg:h-40 h-26 overflow-hidden shrink-0 bg-red-50 rounded-full flex items-center justify-center",
            className,
          )}
        >
          {!change ? (
            <Camera className="size-8" />
          ) : (
            <Image
              width={500}
              height={500}
              src={change}
              alt="preview"
              className="w-full h-full object-cover object-center rounded-md"
            />
          )}
        </div>
        <CardDescription className="lg:px-3 lg:ml-3 lg:self-center">
          <Button
            onClick={() => inputRef.current?.click()}
            variant="secondary"
            className={"capitalize"}
          >
            change image
          </Button>
          {change && (
            <Button
              onClick={handleRemove}
              variant="destructive"
              className={"capitalize"}
            >
              remove image
            </Button>
          )}
          <input
            onChange={handleChange}
            ref={inputRef}
            type="file"
            id="gambar"
            hidden
            name="gambar"
          />
          <p> JPG,PNG or WEBP Maximum size of image is 5mb </p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
