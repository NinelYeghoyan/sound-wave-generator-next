import { FC, ReactElement, RefObject } from 'react';

import { StyledSoundEqualizer } from '@components/SoundEqualizer/styled';
import WaveAnimation from '@components/WaveAnimation';

type SoundEqualizerProps = {
    audioRef: RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    children: ReactElement;
};

const SoundEqualizer: FC<SoundEqualizerProps> = ({ audioRef, isPlaying, children }) => {
    return (
        <StyledSoundEqualizer className="SG-equalizer relative">
            <WaveAnimation isPlaying={isPlaying} />

            <audio ref={audioRef} src="/audio/sound.mp3" controls className="display-none">
                <track kind="captions" src="/audio/sound.mp3" srcLang="en" label="English" default />
            </audio>

            {children}
        </StyledSoundEqualizer>
    );
};

export default SoundEqualizer;
