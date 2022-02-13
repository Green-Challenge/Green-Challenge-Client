import {useRef} from 'react';
import styled from 'styled-components';
import color from 'color';
import Icon from 'components/Icon/Icon';

interface ProfileImageProps {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}
function ProfileImage({image, setImage}: ProfileImageProps) {
  const fileInputRef = useRef<any>();

  const fileConvert = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file); // base64
    reader.addEventListener('load', (event: any) => {
      const poster64 = event.target.result;
      setImage(poster64);
    });
  };
  // console.log(image);
  return (
    <Div>
      {image ? (
        <ImgBtn>
          <Img
            src={image}
            style={{objectFit: 'cover'}}
            onClick={() => {
              setImage(null as any);
            }}
            alt="img"
          />
        </ImgBtn>
      ) : (
        <ImgBtn
          onClick={() => {
            fileInputRef.current.click();
          }}>
          <Icon name="camera" />
        </ImgBtn>
      )}
      <input
        type="file"
        style={{display: 'none'}}
        ref={fileInputRef}
        accept="image/*"
        onChange={fileConvert}
      />
    </Div>
  );
}

const Div = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  border: none;
  background: ${color.line04};
  color: #000;
  width: 10rem;
  height: 10rem;
  margin-top: -2.188rem;
  margin-bottom: 1.25rem;
  border-radius: 100%;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  z-index: 50;
`;
export default ProfileImage;
