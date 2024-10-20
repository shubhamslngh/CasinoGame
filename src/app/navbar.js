import Image from 'next/image';

export default function Example() {
    return (
        <div className="flex mx-auto justify-between items-center">
                <div className='flex-end space-x-0 md:space-x-12 xs:space-x-0 '>
                <button >
                    <Image
                        src="/profile.svg"
                        alt="Menu Icon"
                        layout="intrinsic" // Or use layout="fixed"
                        width={91}
                        height={91}
                        className="px-2 object-contain"
                    />
                </button>

                    <button>
                        <Image
                            src="/score.svg"
                            alt="Score Icon"
                            layout="intrinsic"
                            width={180}
                            height={30}
                            className="gap-2 py-2 object-contain"
                        />
                    </button>

                  
            </div>

            {/* Center - Logo */}
            <div className="flex-2 relative mx-auto justify-center items-center p-2">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    layout="fixed"
                    width={515}
                    height={180}
                    className="object-contain"
                />
            </div>

            {/* Menu SVG */}
            <div className='flex-end gap-[2rem] px-[2rem] space-x-0 md:space-x-12 xs:space-x-0'>
                <button >
                    <Image
                        src="/fullscreen.svg"
                        alt="Menu Icon"
                        layout="intrinsic"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </button>
                <button >
                     <Image
                        src="/menu.svg"
                        alt="Menu Icon"
                        layout="intrinsic"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </button>
            </div>
        </div>
    );
}
