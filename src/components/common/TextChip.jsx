import { cn } from '@/lib/utils';
import React from 'react';

// Define available colors
const COLORS = ["blue", "green", "orange", "pink", "grey"];
const colorMap = new Map(); // Moved colorMap outside the component to persist colors across renders

// Function to get a consistent color for each unique text
const getColorForText = (text) => {
    // Check if text already has a color assigned
    if (colorMap.has(text)) return colorMap.get(text);

    // If not, assign a new color in a circular manner
    const colorIndex = colorMap.size % COLORS.length;
    const color = COLORS[colorIndex];
    colorMap.set(text, color);
    return color;
};

function TextChip({ text }) {
    // Get color for the provided text
    const color = getColorForText(text);

    return (
        <span
            className={cn(`inline-flex select-none items-center whitespace-nowrap rounded-md border-2 font-medium transition-all px-2.5 py-0.5 text-[13px] cursor-default font-mono`,
                color === "blue" && "border-cyan-700/20 bg-cyan-100 text-cyan-900 hover:bg-cyan-200/90 dark:border-cyan-400/30 dark:bg-gradient-to-b dark:from-cyan-900/90 dark:to-cyan-900/90 dark:text-cyan-100 dark:hover:from-cyan-900/70 dark:hover:to-cyan-900/70",
                color === "green" && "border-green-700/20 bg-green-100 text-green-900 hover:bg-green-200/90 dark:border-green-400/30 dark:bg-gradient-to-b dark:from-green-900/90 dark:to-green-900/90 dark:text-green-100 dark:hover:from-green-900/70 dark:hover:to-green-900/70",
                color === "orange" && "border-orange-700/20 bg-orange-100 text-orange-900 hover:bg-orange-200/90 dark:border-orange-400/30 dark:bg-gradient-to-b dark:from-orange-900/90 dark:to-orange-900/90 dark:text-orange-100 dark:hover:from-orange-900/70 dark:hover:to-orange-900/70",
                color === "pink" && "border-pink-700/20 bg-pink-100 text-pink-900 hover:bg-pink-200/90 dark:border-pink-400/30 dark:bg-gradient-to-b dark:from-pink-900/90 dark:to-pink-900/90 dark:text-pink-100 dark:hover:from-pink-900/70 dark:hover:to-pink-900/70",
                color === "grey" && "border-gray-700/20 bg-gray-100 text-gray-900 hover:bg-gray-200/90 dark:border-gray-400/30 dark:bg-gradient-to-b dark:from-gray-900/90 dark:to-gray-900/90 dark:text-gray-100 dark:hover:from-gray-900/70 dark:hover:to-gray-900/70"
            )}
        >
            {text}
        </span>
    );
}

export default TextChip;
