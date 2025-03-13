"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);

    // For a vertical line if you want it
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    // If you still want the animated line, keep this
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 70%"],
    });
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="relative mb-28">
                        {/* Dot + Title: Stacked Sticky */}
                        <div className="sticky flex items-center z-10">
                            {/* Dot */}
                            <div className="relative w-10 h-10 mr-4 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-200 border border-neutral-300 dark:border-neutral-700" />
                            </div>
                            {/* Title */}
                            <h3 className="text-xl md:text-3xl font-bold text-neutral-300 dark:text-neutral-300">
                                {item.title}
                            </h3>
                        </div>

                        {/* Content */}
                        <div className="pl-14 mt-4">
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Optional vertical line behind everything */}
                <div
                    style={{ height: height + "px" }}
                    className="absolute left-5 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};