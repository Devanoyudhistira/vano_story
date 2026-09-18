"use client";

import { Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Profilecreation() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [change, setchange] = useState<string | null>();

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
    <Card className="gap-1 py-1.5" >
      <CardTitle className="text-lg font-semibold ml-4 capitalize">
        {" "}
        profile photo{" "}
      </CardTitle>
      <CardContent className="flex-row gap-1 px-1">
        <div className="w-16 h-16 overflow-hidden shrink-0 bg-red-50 rounded-full flex items-center justify-center ">
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
        <CardDescription>
          <Button
            onClick={() => inputRef.current?.click()}
            variant="secondary"
            className={"capitalize"}
          >
            change image
          </Button>
          {change && <Button
            onClick={handleRemove}
            variant="destructive"
            className={"capitalize"}
          >
            remove image
          </Button>}
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
