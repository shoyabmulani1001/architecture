"use client";

import { useState } from "react";

export default function PlacementActivityTabs({
    activities,
}: {
    activities: any[];
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeActivity = activities[activeIndex];

    return (
        <>
            {/* Tabs */}
            <div className="flex gap-3 mb-8">
                {activities.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div>
                <h4>{activeActivity.title}</h4>
                <p>{activeActivity.description}</p>
            </div>
        </>
    );
}