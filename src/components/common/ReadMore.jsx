import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="text" style={{ whiteSpace: "pre-line" }}>
            {isReadMore ? text.slice(0, 500) +'...' : text}
            <span
                onClick={toggleReadMore}
                className="read-or-hide flex items-center pt-2 "
               
            >
				 {isReadMore ? <FaPlus className="mr-1" /> : <TiMinus className="mr-1"/>}
				 {isReadMore ? "Read more" : " Read less"}
            </span>
        </div>
    );
};

const Content = () => {
    return (
        <div>
            <ReadMore>
                You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins,
                you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? 
                It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center,
                once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, 
                you might just be the one to restore Stardew Valley to greatness!
                        
                Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, 
                and build relationships with townspeople or each other. As more hands are better than one, 
                players have the option to scale profit margin on produce sold for a more challenging experience.
            </ReadMore>
        </div>
    );
};

export default Content;
