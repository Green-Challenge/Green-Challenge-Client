import React, {useState} from 'react';
import Button from 'components/common/Button';
import color from 'color';
import styled from 'styled-components';
import ProfileImage from 'components/Auth/Profile/ProfileImage';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import InputWithLabel from 'components/Auth/common/InputWithLabel';
import SelectWithLabel from 'components/Auth/common/SelectWithLabel';

function Profile() {
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
                <SelectWithLabel
                  value="서울시"
                  label="거주지"
                  name="selectbox"
                />
              </div>
            </div>
          </>
        </Wrapper>
        <Button>확인</Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 24px;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

export {Profile};
