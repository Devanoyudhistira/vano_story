"use client";

import Image from "next/image";
import { Label } from "./ui/label";
import { XIcon } from "lucide-react";
import { CameraIcon } from "lucide-react";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  setimage: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function Thumbnailimageinput({ className, setimage }: Props) {
  const [change, setchange] = useState<string | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setimage(file);
    setchange(url);
  };

  const handleRemove = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setchange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <Label htmlFor="gambar">
        <div
          className={cn(
            "text-xl bg-transparent border-dashed border-accent shadow-black/50 border-2 border-black mt-3 font-bold w-35 rounded-full h-35 lg:w-50 lg:h-50 flex flex-col gap-2 items-center justify-center text-accent lg:ml-0 overflow-hidden relative",
            className,
          )}
        >
          {change ? (
            <>
              <Image
                width={500}
                height={500}
                src={change}
                alt="preview"
                className="w-full h-full object-cover object-center rounded-md"
              />
              <button
                onClick={e => handleRemove(e)}
                className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full p-0.5"
              >
                <XIcon size={16} />
              </button>
            </>
          ) : (
            <>
              <CameraIcon className="size-20 text-red-600" size={35} />
              <h1 className="text-xl font-semibold mt-3 text-red-400">
                {" "}
                Choose your thumbnail here{" "}
              </h1>
            </>
          )}
        </div>

        <input
          hidden
          ref={inputRef}
          type="file"
          name="profile_image"
          id="gambar"
          accept="image/*"
          onChange={handleChange}
        />
      </Label>
    </>
  );
}
