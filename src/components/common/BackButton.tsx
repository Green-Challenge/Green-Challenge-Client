import Icon from 'components/Icon/Icon';
import {useHistory} from 'react-router-dom';
import {css} from 'styled-components/macro';

interface BackButtonProps {
  path: string;
}

function BackButton({path}: BackButtonProps) {
  const history = useHistory();
  const onClick = () => {
    history.push({pathname: path});
  };

  return (
    <div css={divStyle} onClick={onClick}>
      <Icon name="goBack" />
    </div>
  );
}

const divStyle = css`
  cursor: pointer;
  display: flex;
`;

export default BackButton;
