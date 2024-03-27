import styled from 'styled-components';
import { Content } from '../components/Content/Content';
import { Header } from '../components/Header/Header';
import { DatePicker, Input, Upload } from 'antd';
import type { DatePickerProps, UploadProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';
import { FileType, getBase64 } from '../helper/helper';

export const App = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChangeFile: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as FileType, (url) => {
        setImageUrl(url);
      });
    }
  };

  const handleChangeDate: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const uploadButton = (
    <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} type="button">
      <div>Загрузите Ваше фото</div>
    </button>
  );

  return (
    <>
      <Header />
      <Content>
        {/* Персональная информация */}
        <StyledBlock>
          <StyledBlockTitle>Персональная информация</StyledBlockTitle>
          <StyledInputList>
            <StyledInputItem>
              <StyledLabel htmlFor="fio">ФИО</StyledLabel>
              <Input type="text" id="fio" name="fio" placeholder="ФИО" />
            </StyledInputItem>
            <StyledInputItem>
              <StyledLabel htmlFor="residence">Место жительства</StyledLabel>
              <Input type="text" id="residence" name="residence" placeholder="Место жительства" />
            </StyledInputItem>
            <StyledInputItem>
              <StyledLabel htmlFor="phone">Номер телефона</StyledLabel>
              <Input type="text" id="phone" name="phone" placeholder="Номер телефона" />
            </StyledInputItem>
            <StyledInputItem>
              <StyledLabel htmlFor="birthday">День рождения</StyledLabel>
              <DatePicker
                onChange={handleChangeDate}
                id="birthday"
                name="birthday"
                placeholder="День рождения"
                needConfirm
              />
            </StyledInputItem>
            <StyledInputItem>
              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                action="POST"
                onChange={handleChangeFile}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </StyledInputItem>
          </StyledInputList>
        </StyledBlock>
      </Content>
    </>
  );
};

const StyledBlock = styled.div`
  margin-bottom: 30px;
`;

const StyledBlockTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;

const StyledInputList = styled.ul`
  width: 100%;
  padding: 15px 20px 5px;
  border-radius: 20px;
  border: 1px #e1e1e1 solid;
  list-style: none;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StyledInputItem = styled.li`
  margin-bottom: 10px;
`;
