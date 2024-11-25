'use client'
import React from "react";
import { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressDemo = () => {

    // from 0 to 100 for the progress 
	const [progress, setProgress] = useState(0);

	useEffect(() => {
        // start this time when the component mounds

        if (progress >= 100) {
            return 
        }
            const timer = setTimeout(function() {
                setProgress(progress => progress + 10)
                console.log('I am running!!')
            }, 1000);


        // when the component unmounts, we're going to clear the timer.
		return () => clearTimeout(timer);
	}, [progress]);


    // progress
	return (
		<Progress.Root
			className="relative h-[25px] w-[300px] overflow-hidden rounded-full bg-blackA6"
			style={{
				// Fix overflow clipping in Safari
				// https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
				transform: "translateZ(0)",
			}}
			value={progress}
		>
			<Progress.Indicator
				className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-sky-400 transition-transform duration-[660ms]"
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
};

export default ProgressDemo;
