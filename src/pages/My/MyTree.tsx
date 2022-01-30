import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import {EarthImage} from 'components/Main/EarthSection/EarthImage';
import {css} from 'styled-components/macro';

interface MyTreeProps {
  imageSrc: string;
}

function MyTree({imageSrc}: MyTreeProps) {
  return (
    <Layout>
      <Layout.Header>
        <Header headerRgihtItems={<Icon name="close" css={IconStyle} />}>
          함께 심은 나무
        </Header>
      </Layout.Header>
      <Layout.ScrollMain>
        <EarthImage imageSrc={imageSrc} />
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  width: 24px;
  cursor: pointer;
`;

export {MyTree};
