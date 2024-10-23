import React from 'react';
import IntroPage from '@/components/intro';

const Intro3Page = () => {
    return (
        <IntroPage
            message={
                <div className="text-nowrap text-center text-4xl font-normal text-white">
                    <p>เมื่อคุณรู้ตัวอีกที...</p>
                    <p>ตั๋วอันแสนสำคัญของคุณ</p>
                    <p>กลับหายไป!!!</p>
                </div>
            }
            previousPage="/intro-2"
            nextPage="/intro-4"
        />
    );
};

export default Intro3Page;
