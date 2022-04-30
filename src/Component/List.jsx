import React from 'react';
import styled from 'styled-components';

const List = ({ randomWords }) => {
  return (
    <>
      {randomWords.map((values) => {
        const { word,definition,pronunciation} = values;
        return (
          <ListDiv>
            <ContDiv>
              <h4> Word: {word}</h4>
              <h5> Definition: {definition}</h5>
              <h5>pronunciation: {pronunciation}</h5>
            </ContDiv>
          </ListDiv>
        );
      })}
    </>
  );
};

const ListDiv = styled.div`
  display:flex ;
  flex-direction:column ;
  text-transform: capitalize;
  width: 50vw;
  margin: 1rem 0;
  background: white;
  color: black;
  padding:10px ;
`
const ContDiv = styled.div`
  margin-left: 20px;
`
export default List;