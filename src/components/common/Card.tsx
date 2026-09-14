import React, { ReactNode } from "react";

type CardTypes = {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
};

function Card({ title, description, image, children }: CardTypes) {
  return (
    <div className="flex flex-col gap-3 rounded-lg p-2   shadow-md ">
      {image && <img src={image} alt={title} className="rounded-md object-contain mb-4 h-55" />}

      <h2 className="font-bold text-xl mb-2">{title}</h2>

      <p className="mb-4 text-gray-600">{description}</p>

      {children}
    </div> 
  );
}

export default Card;
