import {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import color from 'color';
import Button from 'components/common/Button';

function ProfileImage() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<any>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image); // base64
    } else {
      setPreview(null as any);
    }
  }, [image]);
  return (
    <Div>
      <form>
        {preview ? (
          <ImgBtn>
            <Img
              src={preview}
              style={{objectFit: 'cover'}}
              onClick={() => {
                setImage(null as any);
              }}
              alt="img"
            />
          </ImgBtn>
        ) : (
          <ImgBtn
            onClick={event => {
              event.preventDefault();
              fileInputRef.current.click();
            }}>
            Add Image
          </ImgBtn>
        )}
        <input
          type="file"
          style={{display: 'none'}}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event: any) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === 'image') {
              setImage(file);
              console.log(file);
            } else {
              setImage(null as any);
            }
          }}
        />
        <Button>이미지 전송</Button>
      </form>
    </Div>
  );
}

// const Wrapper = styled.div`
//   text-align: center;
// `;

const Div = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: none;
  background: ${color.line04};
  color: #000;
  width: 10rem;
  height: 10rem;
  margin-top: -35px;
  margin-bottom: 20px;
  border-radius: 100%;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
`;

export default ProfileImage;
