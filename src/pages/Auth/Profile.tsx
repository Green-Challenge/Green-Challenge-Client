import useRegister from 'hooks/auth/useRegister';
import ProfileSection from 'components/Auth/Profile/ProfileSection';
import styled from 'styled-components';
import {Layout} from 'components/common';
import Header from 'components/common/Header';

function Profile() {
  const {data} = useRegister();
  console.log(data);

  return (
    <Layout>
      <Layout.Header>
        <Header>프로필</Header>
      </Layout.Header>
      <Main>
        <ProfileSection />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {Profile};
