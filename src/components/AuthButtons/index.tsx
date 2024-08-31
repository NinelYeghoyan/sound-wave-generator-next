import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import StyledAuthButtons from '@components/AuthButtons/styled';
import Button from '@components/Button';

const AuthButtons: FC = () => {
    const { t } = useTranslation();

    return (
        <StyledAuthButtons className="SG-auth-btn flex flex-column-reverse flex-md-row flex-md-shrink-0">
            <Button variant="outline" className="ph-22">
                {t('signIn')}
            </Button>
            <Button variant="secondary" className="ph-22">
                {t('tryForFree')}
            </Button>
        </StyledAuthButtons>
    );
};

export default AuthButtons;
