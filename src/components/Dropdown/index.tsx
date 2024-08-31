import { FC, ReactNode } from 'react';

import StyledDropdown from '@components/Dropdown/styled';

type DropdownProps = {
    $isSecondary?: boolean;
    component: ReactNode;
};

const Dropdown: FC<DropdownProps> = ({ component, $isSecondary = false }) => {
    return (
        <StyledDropdown $isSecondary={$isSecondary} className="SG-dropdown">
            {component}
        </StyledDropdown>
    );
};

export default Dropdown;
