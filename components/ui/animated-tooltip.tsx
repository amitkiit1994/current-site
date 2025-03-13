"use client";
import Image from "next/image";
import React from "react";

export const AnimatedProfileImage = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        designation: string;
        image: string;
    }[];
}) => {
    return (
        // Add margin-bottom so there's space below the image
        <div className="mb-6 flex items-center justify-center">
            {items.map((item) => (
                // A fixed-size container for your Image
                <div key={item.id} className="relative w-40 h-40 ">
                    {/* 
            Use `fill` to make Image fill its parent (w-40, h-40).
            `rounded-full` keeps it circular.
            `border-4 border-white` gives a thick white border (optional).
          */}
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="
              rounded-full
              object-cover
              border-4 border-purple
              object-cover object-[center_20%]
            "
                    />
                </div>
            ))}
        </div>
    );
};