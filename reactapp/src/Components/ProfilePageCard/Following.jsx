import React, { useEffect, useState } from "react";



const Following = ({ following }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Set isVisible to true when the component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-4 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <h1 className="text-xl font-semibold mb-4">Following</h1>
            <div className="space-y-2">
                {following.map((follow) => (
                    <p
                        key={follow.id}
                        className="text-gray-800 cursor-pointer transition-colors duration-300 hover:text-blue-500"
                    >
                        {follow.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Following;
