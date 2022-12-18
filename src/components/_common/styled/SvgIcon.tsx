import React, { SVGProps, MouseEvent } from 'react';
import { DataTest } from 'src/types/common';
import { Icons } from 'src/types/icons';

interface Props extends DataTest {
  name: Icons;
  width?: string;
  color?: string;
  onClick?: (e: MouseEvent<SVGSVGElement>) => void;
}

const SvgIcon: React.FC<Props> = ({
  name,
  width = '16px',
  color,
  onClick,
  dataTest,
}) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const Icon: React.FC<SVGProps<SVGSVGElement>> = require(`src/assets/icons/${name}.svg`).default;
  return <Icon data-testid={dataTest} fill={color} width={width} onClick={onClick} />;
};

export default SvgIcon;
