import { FC } from 'react';

import StyledWaveAnimation from '@components/WaveAnimation/styled';

type WaveAnimationProps = {
    isPlaying: boolean;
};

const WaveAnimation: FC<WaveAnimationProps> = ({ isPlaying = false }) => {
    return (
        <StyledWaveAnimation
            width="636"
            height="47"
            viewBox="0 0 636 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            $isPlaying={isPlaying}
            className="SG-wave-animation"
        >
            <g opacity="0.5">
                <rect className="wave-bar" x="10" width="6" height="56" fill="white" />
                <rect className="wave-bar" x="30" y="6" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="40" y="10" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="130" y="6" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="160" y="15" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="50" y="21" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="140" y="10" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="170" y="19" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="60" y="22" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="150" y="11" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="180" y="20" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="70" y="17" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="80" y="14" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="90" y="6" width="6" height="41" fill="white" />
                <rect className="wave-bar" x="100" y="10" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="190" y="5" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="250" y="14" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="400" y="28" width="6" height="81" fill="white" />
                <rect className="wave-bar" x="280" y="23" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="430" y="22" width="6" height="81" fill="white" />
                <rect className="wave-bar" x="310" y="15" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="460" y="9" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="510" y="14" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="340" y="28" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="490" y="29" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="540" y="14" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="600" y="15" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="580" y="19" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="220" y="14" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="370" y="8" width="6" height="81" fill="white" />
                <rect className="wave-bar" x="110" y="1" width="6" height="60" fill="white" />
                <rect className="wave-bar" x="200" width="6" height="58" fill="white" />
                <rect className="wave-bar" x="260" y="14" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="410" y="24" width="6" height="81" fill="white" />
                <rect className="wave-bar" x="290" y="23" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="440" y="22" width="6" height="81" fill="white" />
                <rect className="wave-bar" x="320" y="11" width="6" height="57" fill="white" />
                <rect className="wave-bar" x="470" y="3" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="520" y="8" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="560" y="33" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="620" y="14" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="350" y="24" width="6" height="57" fill="white" />
                <rect className="wave-bar" x="500" y="23" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="550" y="28" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="610" y="9" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="590" y="13" width="6" height="88" fill="white" />
                <rect className="wave-bar" x="230" y="18" width="6" height="53" fill="white" />
                <rect className="wave-bar" x="380" y="14" width="6" height="82" fill="white" />
                <rect className="wave-bar" x="120" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="210" y="11" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="360" y="3" width="6" height="73" fill="white" />
                <rect className="wave-bar" x="270" y="20" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="420" y="17" width="6" height="72" fill="white" />
                <rect className="wave-bar" x="300" y="29" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="450" y="31" width="6" height="72" fill="white" />
                <rect className="wave-bar" x="330" y="21" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="480" y="18" width="6" height="73" fill="white" />
                <rect className="wave-bar" x="530" y="23" width="6" height="73" fill="white" />
                <rect className="wave-bar" x="570" y="21" width="6" height="73" fill="white" />
                <rect className="wave-bar" x="630" y="29" width="6" height="73" fill="white" />
                <rect className="wave-bar" x="240" y="20" width="6" height="47" fill="white" />
                <rect className="wave-bar" x="390" y="17" width="6" height="72" fill="white" />
                <rect className="wave-bar" width="6" height="56" fill="white" />
                <rect className="wave-bar" x="20" width="6" height="56" fill="white" />
            </g>
        </StyledWaveAnimation>
    );
};

export default WaveAnimation;
