import React,{useState} from 'react'
import WordDefinitions from './WordDefinitions'
import styled from 'styled-components'
import RandomData from './RandomData'
import List from './List'

const WordDef = () => {
  const [word, setWord] = useState()
  const [randomWords,setRandomWords] = useState(RandomData)
  const [audio, setAudio] = useState()
  const [display, setDisplay] = useState([])
  const [show, setShow] = useState([])


  const fetchData = async ()=>{
      const data = await fetch ( `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const newData = await data.json()
      setDisplay(newData[0])
      setShow(newData)
      const url = newData[0].phonetics[0].audio
      setAudio(url)  
  }
  


  const Search = () => {
    fetchData();
    setWord("");
  };
  return (
    <MainSection>
        <MainDiv>
          <TextDiv>
            Dictionary App
          </TextDiv>
          <SearchDiv>
            <p>What word do you want to look up?</p>
            <input
              type="text"
              placeholder="Search word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={Search}>Search</button>
          </SearchDiv>
        </MainDiv>
      {word === "" ? (
        <WordDefinitions audio={audio} display={display} show={show} />
      ) : (
        <DefaultView>
          Words You may Know
          <List randomWords={randomWords}/>
        </DefaultView>
      )}
    </MainSection>
  )
}

const MainSection = styled.section`
  display:flex ;
  flex-direction:column ;
  font-style: normal;
  width: 100%;
` 
const MainDiv = styled.div`
 
`
const TextDiv = styled.div`
  font-weight: 800;
  font-size: 20px;
  color: #edeff3;
  padding: 2rem;
`
const DefaultView =  styled.div`
  color: #67686a;
  margin-left:30px ;
`
const SearchDiv = styled.div`
  display:flex ;
  flex-direction:column ;
  align-items:center;
  p{
    margin-right: 110px;
    color: #edeff3;
  }
  input{
    margin: 10px;
    padding:4px;
    width: 350px;
    line-height: 18px;
    font-size: 14px;
    &:focus {
        outline: none;
    }
  }
  button{
    padding:4px;
    width: 100px;
    background: #3b3d3b;
    color:white ;
    margin-bottom: 20px;
    &:hover{
      background: #0b0b0b
    }
  }
`
export default WordDef