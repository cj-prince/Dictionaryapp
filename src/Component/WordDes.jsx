import React from 'react'
import styled from 'styled-components';

const WordDes = ({show}) => {
  return (
    <>
      {show.map((shows) => {
        return shows.meanings.map((Shows) => {
          return Shows.definitions.map((Def) => {
            return (
              <ListDiv>
                  {Def.definition}
              </ListDiv>
            );
          });
        });
      })}
    </>
  )
}

const ListDiv = styled.div`
  border: 1px solid rgba(164, 167, 183, 0.4);
  border-radius: 4px;
  text-transform:capitalize ;
  margin-bottom: 20px;
  margin-right: 50px;
`

export default WordDes