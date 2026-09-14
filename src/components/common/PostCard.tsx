import React from "react";

function PostCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 bg-gray-200 p-5 rounded-xl shadow-md  hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 ">
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-sm leading-6 text-gray-600">{body}</p>
    </div>
  );
}

export default PostCard;
