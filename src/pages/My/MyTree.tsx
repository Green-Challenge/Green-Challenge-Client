import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import EarthSection from 'components/Main/EarthSection/EarthSection';
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
        <EarthSection imageSrc={imageSrc} />
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  width: 24px;
  cursor: pointer;
`;

export {MyTree};
