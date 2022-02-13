import useRegister from 'hooks/auth/useRegister';
import ProfileSection from 'components/Auth/Profile/ProfileSection';
import styled from 'styled-components';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

function Profile() {
  const {data} = useRegister();

  return (
    <Layout>
      <Layout.Header>
        <Header
          isTitle
          headerRgihtItems={
            <div>
              <Icon name="close" css={IconStyle} />
            </div>
          }>
          프로필
        </Header>
      </Layout.Header>
      <Main>
        <ProfileSection userId={data!.userId} />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const IconStyle = css`
  cursor: pointer;
`;

export {Profile};
