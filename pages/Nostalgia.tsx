import React, { useState, useEffect } from "react";

export default function Nostalgia() {
    // Declare state to track whether audio is muted or not
    const [muted, setMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        try {
            // Create a new Audio object with the specified audio file
            const audio = new Audio("/img/todo-categorize-this-folder/c418.mp3");

            // Set volume to 10% (0.1)
            audio.volume = 0.1;

            // Set the audio to loop
            audio.loop = true;

            // Function to play/pause the audio
            const handlePlayPause = () => {
                if (!muted) {
                    if (isPlaying) {
                        audio.pause();
                        setIsPlaying(false);
                    } else {
                        audio.play();
                        setIsPlaying(true);
                    }
                }
            };

            // Add event listener to play/pause audio when clicking anywhere on the page
            document.addEventListener("click", handlePlayPause);

            // Cleanup function
            return () => {
                document.removeEventListener("click", handlePlayPause);
            };
        } catch (error) {
            console.error("Error creating audio object:", error);
        }
    }, [muted, isPlaying]); // Include muted and isPlaying in the dependency array

    // Function to toggle mute state
    const toggleMute = () => {
        try {
            setMuted(!muted); // Toggle muted state
        } catch (error) {
            console.error("Error toggling mute state:", error);
        }
    };

    return (
        <div>
        </div>
    );
}


