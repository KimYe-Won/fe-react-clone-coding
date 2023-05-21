import React from "react";
import styled from "styled-components";

const CardB = styled.div`
  display: flex;
  /* flex-direction: row; */
  margin: 0px 16px;
  width: 44px;
  height: 32px;

  text-align: center;
  font-size: 14.4px;
  font-weight: 400;
`;

const CardB1 = styled.button`
    background-color: white;
    border: 0.1px solid gray;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;

    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`;

const CardB2 = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;

    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`;

const Button = () => {
  return (
    
    <div>
      <CardB>
        <CardB1>View</CardB1>
        <CardB2>Edit</CardB2>
      </CardB>
    </div>
  );
};

export default Button;