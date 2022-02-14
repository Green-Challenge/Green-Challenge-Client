import color from 'color';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import {useHistory} from 'react-router-dom';
import {css} from 'styled-components/macro';

function NoTree() {
  const history = useHistory();
  const onClick = () => {
    history.push({pathname: '/'});
  };
  return (
    <Layout>
      <Layout.Header>
        <Header
          headerRgihtItems={
            <div onClick={onClick}>
              <Icon name="close" css={IconStyle} />
            </div>
          }>
          함께 심은 나무
        </Header>
      </Layout.Header>
      <Layout.Main>
        <div css={wrapStyle}>
          <div>
            <img src="/Icon/SVG/no_tree_earth.svg" alt="지구" />
          </div>
          <div css={descriptionStyle}>
            <div>아직 심은 나무가 없으시네요</div>
            <div>챌린지에 참여해</div>
            <div>지구에게 나무를 선물해 주세요!</div>
          </div>
        </div>
      </Layout.Main>
    </Layout>
  );
}

const wrapStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 30%;
`;

const descriptionStyle = css`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${color.bodyFont01};
`;

const IconStyle = css`
  width: 1.5rem;
  cursor: pointer;
`;

export default NoTree;
