import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@components/Logo';
import { Social } from '@components/Social';
import StyledFooter from '@layout/Footer/styled';

const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <StyledFooter className="SG-footer">
            <div className="SG-footer__inner">
                <div className="SG-footer__container flex-center flex-column flex-sm-row justify-sm-between">
                    <Logo />
                    <p className="SG-footer__copyright">{t('copyright')}</p>
                    <Social />
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
