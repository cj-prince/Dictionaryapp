import React from 'react'
import styled from 'styled-components'
import SimilarWords from './SimilarWords'
import WordDes from './WordDes'

const WordDefinitions = ({audio,display, show, similar}) => {
  return (
    <Main>
          <WordDiv> word: {display.word}</WordDiv>
          {audio ? (
            <audio
              controls
              src={audio}
            ></audio>
          ) : (
            <div> No Audio Found</div>
          )}
          <MeaningDiv> Definitions : </MeaningDiv>
          <div>
              <WordDes show={show} />
          </div>
          <div>
            <MeaningDiv>Similar Words:</MeaningDiv> 
            <SimilarWords similar={similar}/>
          </div>
          <PhontDiv>
            Phonetic: {' '} <span>{display.phonetic}</span> 
          </PhontDiv>
    </Main>
  )
}

const Main = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  margin-left:30px;
  color:white;
`
const WordDiv = styled.div` 
  font-size:40px;
  font-weight: 400;
  text-transform:capitalize ;
`
const MeaningDiv = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: gray;
  text-transform:capitalize;
`
const PhontDiv = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: gray;
  margin-bottom: 20px;
  span{
    color:white ;
  }
`
export default WordDefinitions