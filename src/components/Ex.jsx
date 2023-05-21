import React from "react";
import styled from "styled-components";
import Button from './components/Button';

const ExBox = styled.div`
  background-color: #f8f9fa;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px;
  border-radius: 5px;
`

const ExBody = styled.div`
  height: 400px;
  margin: 14.4px 16px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 3.2px;
  box-shadow: 0.5px 0.5px 2px 0.5px #dadce0;
`

const ExPic = styled.div`
  width: 350px;
  height: 230px;
  border-top-right-radius: 3.2px;
  border-top-left-radius: 3.2px;
  background-position: center;
  background-size: contain;
  background-color: #55595C;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ExTxt = styled.div`
  width: 350px;
  height: 150px;
  background: white;
`;

const ExMainTxt = styled.p`
  font-size: 16px;
  position: relative;
  margin: 16px;
  line-height: 24px;
`;

const ExDown = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExTime = styled.p`
  font-size: 14.8px;
  margin: 8px 16px;
  color: #6c757d;
`;


const Ex = () => {
  return (
    
    <ExBox>

      <ExBody>
        <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
        <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExPic>Thumbnail</ExPic>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <ExTime>9 mins</ExTime>
          </ExDown>
        </ExTxt>
      </ExBody>
    </ExBox>
    
  );
};

export default Ex;