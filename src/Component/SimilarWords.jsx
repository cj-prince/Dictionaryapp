import React from 'react'
import styled from 'styled-components';

const SimilarWords = ({similar}) => {
  return (
      <>
      {similar.map((similar) => {
        return (
          <SimDiv>
              {similar.word}
          </SimDiv>
        );
      })}
    </>
  )
}

const SimDiv = styled.div`
  text-transform:capitalize;
  margin-top: 10px;
  margin-left: 20px;
`
export default SimilarWords