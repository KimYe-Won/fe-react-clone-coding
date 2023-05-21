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
`;

const ExBody = styled.div`
  height: 400px;
  margin: 0.9rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.2rem;
  box-shadow: 0.5px 0.5px 2px 0.5px #dadce0;
`;

const ExImg = styled.div`
  width: 350px;
  height: 230px;
  border-top-right-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
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

const ExMainText = styled.p`
  font-size: 1rem;
  position: relative;
  margin: 1rem;
  line-height: 1.5rem;
`;

const ExDown = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardTime = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem 1rem;
  color: #6c757d;
`;


const Ex = () => {
  return (
    
    <ExBox>

      <ExBody>
        <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
        <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <ExDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </ExDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>

      <ExBody>
      <ExImg>Thumbnail</ExImg>
        <ExTxt>
          <ExMainTxt>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </ExMainTxt>
          <CardDown>
          <Button />
            <CardTime>9 mins</CardTime>
          </CardDown>
        </ExTxt>
      </ExBody>
    </ExBox>
    
  );
};

export default Ex;