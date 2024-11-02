import { rotations, translateX, translateY } from '../route';

export const Stamp11 = ({ index }: { index: number }) => {
    return (
        <svg
            // style={{
            //     padding: `0.${Math.abs(3 - index) * 3}5rem`,
            //     transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            // }}
            style={{
                position: 'absolute',
                width: '70%',
                height: '70%',
                padding: `0.${Math.abs(3 - 2) * 3}rem`,
                transform: `translate(${translateX[index]}%, ${translateY[index]}%) rotate(${rotations[index]}deg)`,
            }}
            viewBox="0 0 81 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.9256 1.04322C-2.43968 -0.236457 1.25398 28.3383 3.62813 75.6922C13.1135 41.3835 35.9625 59.818 53.073 40.1727C63.9711 27.6601 43.6946 12.1168 32.8915 25.0365C35.0603 17.3256 34.2909 2.32289 15.9256 1.04322Z"
                fill="#FC7DA8"
                stroke="black"
                stroke-width="1.61453"
            />
            <path
                d="M72.2832 68.2881C74.5431 75.4332 53.5707 79.7914 44.0764 81.1536C50.5121 76.6082 47.2542 66.0357 52.6809 56.9499C57.3515 49.1302 64.9002 58.0975 60.8501 63.6067C63.6766 62.0119 70.0234 61.1429 72.2832 68.2881Z"
                fill="#FC7DA8"
                stroke="black"
                stroke-width="1.61453"
            />
        </svg>
    );
};
