import { rotations, translateX, translateY } from '../route';

export const Stamp12 = ({ index }: { index: number }) => {
    return (
        <svg
            style={{
                position: 'absolute',
                width: '70%',
                height: '70%',
                padding: `0.${Math.abs(3 - 2) * 3}rem`,
                transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            }}
            viewBox="0 0 40 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.3999 2.92307L23.5333 0.962128L15.6895 27.4349L39.0983 18.4881L4.65919 82.0962L18.6309 35.4012L1.10498 43.245L11.3999 2.92307Z"
                fill="#FFE512"
                stroke="black"
                stroke-width="1.61453"
                stroke-linejoin="round"
            />
        </svg>
    );
};
