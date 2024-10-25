"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { format } from "date-fns";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";

export default function ItemCard({ post }) {
  const { title, category, images, city, dateFound, _id } = post || {};

  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{category?.name}</p>
          <h4 className="font-bold text-large">{title}</h4>
        </CardHeader>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={400}
          src={images[0]}
          width={500}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{city}</p>
          <p className="text-tiny text-white/80">
            {format(new Date(dateFound), "dd MMMM, yyyy")}
          </p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
