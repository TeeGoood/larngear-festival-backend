'use client';
import Border from '@/components/border';
import Name from '@/components/card/Name';
import Share from '@/components/card/Share';
import Sticker from '@/components/card/Sticker';
import Logo from '@/components/logo';
import React, { useState } from 'react';
import ChooseColor from '@/components/card/color/ChooseColor';
import ChooseStamp from '@/components/card/ChooseStamp';
import { Icon } from '@iconify/react/dist/iconify.js';
import { STAMPS as Stamps } from '@/const/stamp';
import { cn } from '@/lib/utils';

export type CardMode = 'sticker' | 'name' | 'share';

const phases: CardMode[] = ['sticker', 'name', 'share'];

export default function Card() {
    const [phase, setPhase] = useState<CardMode>('sticker');
    const [selected, setSelected] = useState<number | null>(0);
    const [name, setName] = useState<string>('');
    const [stamps, setStamps] = useState<string[]>(['', '', '', '', '', '']);
    const [backgroundColor, setBackgroundColor] = useState<string>(
        'bg-project-dark-blue'
    );
    const [tapeColor, setTapeColor] = useState<string>('bg-project-yellow');

    const handleSetBackgroundColor = (color: string) => {
        setBackgroundColor(color);
    };

    const handleSetTapeColor = (color: string) => {
        setTapeColor(color);
    };

    const handleNextPhase = (p: number) => {
        setPhase((prevPhase) => {
            const currentIndex = phases.indexOf(prevPhase);
            if ((currentIndex === 0 && p < 0) || (currentIndex === 3 && p > 0))
                return phases[currentIndex];
            const nextIndex = currentIndex + p;
            return phases[nextIndex];
        });
    };

    const handleSelectedStamp = (index: number, sticker: string) => {
        const newStamp = [...stamps];
        newStamp[index] = sticker;
        setStamps(newStamp);
    };

    return (
        <section className="mx-auto px-4 py-6">
            <button
                className="grid h-10 w-10 place-items-center rounded-full bg-project-dark-blue"
                onClick={() => handleNextPhase(-1)}
            >
                <Icon
                    icon="akar-icons:arrow-left"
                    className="text-3xl text-white"
                />
            </button>
            <Border
                topBorder={backgroundColor}
                className={cn('items-center space-y-16 pb-8', backgroundColor)}
            >
                <main className="flex flex-col items-center justify-center gap-9 px-4">
                    {phase === 'share' && (
                        <Share
                            tapecolor={tapeColor}
                            stamps={stamps}
                            name={name}
                        />
                    )}

                    {phase !== 'share' && (
                        <>
                            <Logo size={94} />
                            <ChooseStamp
                                stamps={stamps}
                                tapeColor={tapeColor}
                                setSelected={setSelected}
                                phase={phase}
                                selected={selected}
                            />
                        </>
                    )}
                    {phase === 'name' && (
                        <Name name={name} handleNameChanged={setName} />
                    )}

                    {phase === 'sticker' && (
                        <ChooseColor
                            colorState={tapeColor}
                            handler={handleSetTapeColor}
                        />
                    )}
                    {phase === 'name' && (
                        <ChooseColor
                            colorState={backgroundColor}
                            handler={handleSetBackgroundColor}
                        />
                    )}

                    {phase === 'sticker' && (
                        <Sticker
                            stickers={Stamps}
                            selected={selected}
                            handleSelected={setSelected}
                            handleStamps={handleSelectedStamp}
                        />
                    )}

                    {phase !== 'share' && (
                        <button
                            onClick={() => handleNextPhase(1)}
                            className="h-12 w-64 rounded-lg border-2 border-black bg-project-light-blue text-3xl text-white"
                        >
                            ไปกันต่อ!
                        </button>
                    )}
                </main>
            </Border>
        </section>
    );
}
