import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  paddingHorizontal:5px;
  align-items: center;
  background-color: #1E1B26;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const UserImgWrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  width: 300px;
  border-bottom-width: 0.3px;
  border-bottom-color: #64676D;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color:#FFF
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: gray;
  
`;

export const MessageText = styled.Text`
  font-size: 14px;
  color: gray;
`;