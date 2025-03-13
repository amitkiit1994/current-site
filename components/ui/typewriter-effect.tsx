"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useState, useEffect } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    display: "inline-block",
                    opacity: 1,
                    width: "fit-content",
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: "easeInOut",
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(
                                        `dark:text-white text-black opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div
            className={cn(
                "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
                className
            )}
        >
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // state to track the currently displayed word
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // animation durations (in seconds)
    const animationDuration = 2; // duration of the "typing" animation
    const pauseDuration = 1; // extra pause before moving to the next word

    // cycle to next word after the animation and pause
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, (animationDuration + pauseDuration) * 1000);
        return () => clearTimeout(timeout);
    }, [currentWordIndex, words.length]);

    // get the current word and split it into characters
    const currentWord = words[currentWordIndex];
    const wordChars = currentWord.text.split("");

    return (
        <div className={cn("flex space-x-1 my-6", className)}>
            <motion.div
                // using the current word index as key forces a re-animation when it changes
                key={currentWordIndex}
                className="overflow-hidden pb-2"
                initial={{ width: "0%" }}
                animate={{ width: "fit-content" }}
                transition={{
                    duration: animationDuration,
                    ease: "linear",
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {wordChars.map((char, index) => (
                        <span
                            key={`char-${index}`}
                            // Applying the color #CBACF9 directly as inline style
                            style={{ color: "#CBACF9" }}
                            className={cn(currentWord.className)}
                        >
                            {char}
                        </span>
                    ))}
                    &nbsp;
                </div>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};
