"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Sidebar() {
    // State to keep track of the active button
    const [activeButton, setActiveButton] = useState(null);

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            className="mx-auto h-[33rem] w-auto p-1 rounded-[4rem] bg-[url('/image.png')]"
            style={{
                background:
                    'linear-gradient(103.54deg, rgba(215, 188, 147, 0.2) 0%, rgba(113, 99, 77, 0.2) 50%, rgba(215, 188, 147, 0.2) 100%), linear-gradient(0deg, rgba(24, 14, 4, 0.5), rgba(24, 14, 4, 0.5))',
                borderWidth: '4.57px',
                borderStyle: 'solid',

                borderImageSource:
                    'linear-gradient(10.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                boxShadow:
                    '0px 8px 3.43px 0px #D7BC934D inset, 0px -5.71px 2.29px 0px #0000004D inset',
                backdropFilter: 'blur(1.857px)',
            }}
        >
            <div className="flex flex-col items-center space-y-1">
                {/* ALL Button */}
                <div className="flex border-b-1 flex-col items-center space-y-1">
                    <button onClick={() => handleButtonClick('ALL')}>
                        <Image
                            src="/All.svg"
                            alt="All"
                            width={71}
                            height={98}
                            className={`rounded-[4rem] ${activeButton === 'ALL'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : ''
                                }`}
                        />
                        <span
                            className="text-gradient text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            ALL
                        </span>
                    </button>
                </div>

                {/* FAVORITE Button */}
                <div className="flex flex-col items-center space-y-1">
                    <button onClick={() => handleButtonClick('FAVORITE')}>
                        <Image
                            src="/sidebar_heart.svg"
                            alt="Favorite"
                            width={71}
                            height={98}
                            className={`rounded-[4rem] ${activeButton === 'FAVORITE'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : ''
                                }`}
                        />
                        <span
                            className="text-gradient text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            FAVORITE
                        </span>
                    </button>
                </div>

                {/* SLOTS Button */}
                <div className="flex flex-col items-center space-y-1">
                    <button onClick={() => handleButtonClick('SLOTS')}>
                        <Image
                            src="/sidebar_slot.svg"
                            alt="Slots"
                            width={71}
                            height={98}
                            className={`rounded-[4rem] ${activeButton === 'SLOTS'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : ''
                                }`}
                        />
                        <span
                            className="text-gradient text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            SLOTS
                        </span>
                    </button>
                </div>

                {/* FISHING Button */}
                <div className="flex flex-col items-center space-y-1">
                    <button onClick={() => handleButtonClick('FISHING')}>
                        <Image
                            src="/fishing.svg"
                            alt="Fishing"
                            width={71}
                            height={98}
                            className={`rounded-[4rem] ${activeButton === 'FISHING'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : ''
                                }`}
                        />
                        <span
                            className="text-gradient text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            FISHING
                        </span>
                    </button>
                </div>

                {/* OTHER Button */}
                <div className="flex flex-col items-center space-y-1">
                    <button onClick={() => handleButtonClick('OTHER')}>
                        <Image
                            src="/other.svg"
                            alt="Other"
                            width={71}
                            height={98}
                            className={`rounded-[4rem] ${activeButton === 'OTHER'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                    : ''
                                }`}
                        />
                        <span
                            className="text-gradient text-sm font-semibold"
                            style={{
                                background:
                                    'linear-gradient(103.54deg, #D7BC93 0%, #71634D 50%, #D7BC93 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                            }}
                        >
                            OTHER
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
