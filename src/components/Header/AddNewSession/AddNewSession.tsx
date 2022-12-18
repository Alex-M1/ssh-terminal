import { useTranslation } from 'next-i18next';
import React from 'react';
import { StFlex } from 'src/components/_common/styled/Block';
import SvgIcon from 'src/components/_common/styled/SvgIcon';
import { StSpan } from 'src/components/_common/styled/Text';

interface Props {

}

const AddNewSession: React.FC<Props> = ({ }) => {
  const { t } = useTranslation();
  return (
    <StFlex flexDirection="column">
      <SvgIcon width="36px" name="network" dataTest="" />
      <StSpan>{t('sessions')}</StSpan>
    </StFlex>
  );
};

export default AddNewSession;
