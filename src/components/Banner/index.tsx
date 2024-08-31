import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import bannerMobile from '@assets/images/banner_sm.webp';
import bannerWeb from '@assets/images/banner_xl.webp';
import StyledBanner from '@components/Banner/styled';
import Button from '@components/Button';
import ResponsiveImage from '@components/ResponsiveImage';
import SoundEqualizer from '@components/SoundEqualizer';

const Banner: FC = () => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        const handleAudioEnd = () => {
            setIsPlaying(false);
        };

        const audioElement = audioRef.current;

        if (audioElement) {
            audioElement.addEventListener('ended', handleAudioEnd);
        }

        return () => {
            if (audioElement) {
                audioElement.removeEventListener('ended', handleAudioEnd);
            }
        };
    }, []);

    return (
        <StyledBanner className="SG-banner sm-flex align-sm-center">
            <div className="SG-banner__order sm-w50">
                <h1 className="SG-banner__title lg-space-pre-line">{t('bannerTitle')}</h1>
                <p className="SG-banner__text xl-space-pre-line">{t('bannerText')}</p>

                <div className="flex justify-center justify-sm-start">
                    <Button onClick={handleClick} size="large" className="ph-30">
                        {t('animateSoundWaves')}
                    </Button>
                </div>
            </div>

            <div className="SG-banner__order sm-w50 relative">
                <SoundEqualizer audioRef={audioRef} isPlaying={isPlaying}>
                    <ResponsiveImage assetWeb={bannerWeb} assetMobile={bannerMobile} alt="bannerTitle" isPriority />
                </SoundEqualizer>
            </div>
        </StyledBanner>
    );
};

export default Banner;
