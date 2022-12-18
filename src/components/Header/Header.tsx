import { StFlex } from '../_common/styled/Block';
import AddNewSession from './AddNewSession';

interface Props {

}

const Header: React.FC<Props> = ({ }) => {
  console.log('1');
  return (
    <StFlex sb color="white">
      <AddNewSession />
      <span>asdsad</span>
      <span>22312313</span>
    </StFlex>
  );
};

export default Header;
