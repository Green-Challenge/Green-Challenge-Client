import Button from 'components/common/Button';
import styled from 'styled-components';
import ProfileImage from 'components/Auth/Profile/ProfileImage';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import SelectWithLabel from 'components/Auth/common/SelectWithLabel';
import {useHistory} from 'react-router-dom';

function Profile() {
  let history = useHistory();

  return (
    <Layout>
      <Layout.Header>
        <Header>프로필</Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <ProfileImage />
          <>
            <div>
              <div className="form-nickname">
                <InputWithLabel
                  label="닉네임"
                  name="nickname"
                  placeholder="닉네임"
                />
              </div>
              <div className="form-location">
                <SelectWithLabel value="서울시" label="거주지" name="selectbox">
                  <option value="1">입력</option>
                  <option value="2">지역명</option>
                </SelectWithLabel>
              </div>
            </div>
          </>
        </Wrapper>
        <Button
          onClick={() => {
            history.push('/auth/signin');
          }}>
          확인
        </Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {Profile};
