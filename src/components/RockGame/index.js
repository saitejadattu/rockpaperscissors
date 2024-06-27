import {Component} from 'react'
import {
  GameConatiner,
  GameDivConatiner,
  GameItemNames,
  Para,
  ScoreBoard,
  ScoreView,
  Score,
  ScoreTxt,
  GameImgUl,
  InfoContainer,
  InfoBtn,
  PopupContainer,
  InfoImg,
  PopupImgContainer,
  CloseBtn,
  ParaHead,
  ListItem,
  Image,
  GameImgUL,
  ResultCon,
  Heading,
  Button,
} from './styledComponents'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

class RockGame extends Component {
  state = {
    score: 0,
    randomItem: '',
    clikedImg: '',
    isVisible: true,
    firstItem: '',
    secondItem: '',
    status: '',
  }
  onClickPlayAgain = () => {
    const {isVisible} = this.state
    this.setState({isVisible: !isVisible})
    this.setState({
      randomItem: '',
      clikedImg: '',
      isVisible: true,
      firstItem: '',
      secondItem: '',
      status: '',
    })
  }
  onClickImg = event => {
    const {choicesList} = this.props
    const {isVisible} = this.state
    let id = event.target.id
    const firstItem = choicesList.filter(each => each.id === id)
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomItem = choicesList[randomNum]
    this.setState({secondItem: randomItem, firstItem: firstItem[0]})
    if (id === randomItem.id) {
      this.setState({status: 'IT IS DRAW'})
    } else if (id === 'ROCK' && randomItem.id === 'SCISSORS') {
      this.setState({status: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'SCISSORS' && randomItem.id === 'PAPER') {
      this.setState({status: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'PAPER' && randomItem.id === 'ROCK') {
      this.setState({status: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else {
      this.setState({status: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
    this.setState({isVisible: !isVisible})
  }
  render() {
    const {score, firstItem, secondItem, isVisible, status} = this.state
    const {choicesList} = this.props
    return (
      <GameConatiner>
        <GameDivConatiner>
          <ScoreBoard>
            <GameItemNames>
              <Heading>
                ROCK <br />
                PAPER
                <br />
                SCISSORS
              </Heading>
            </GameItemNames>
            <ScoreView>
              <ScoreTxt>Score</ScoreTxt>
              <Score>{score}</Score>
            </ScoreView>
          </ScoreBoard>
          {isVisible ? (
            <GameImgUl>
              <ListItem>
                <Button data-testid="rockButton" onClick={this.onClickImg}>
                  <Image
                    alt={choicesList[0].id}
                    id={choicesList[0].id}
                    src={choicesList[0].imageUrl}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button data-testid="paperButton" onClick={this.onClickImg}>
                  <Image
                    alt={choicesList[1].id}
                    id={choicesList[1].id}
                    src={choicesList[1].imageUrl}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button data-testid="scissorsButton" onClick={this.onClickImg}>
                  <Image
                    alt={choicesList[2].id}
                    id={choicesList[2].id}
                    src={choicesList[2].imageUrl}
                  />
                </Button>
              </ListItem>
            </GameImgUl>
          ) : (
            <ResultCon>
              <GameImgUL>
                <ListItem>
                  <Para>You</Para>
                  <Image alt="your choice" src={firstItem.imageUrl} />
                </ListItem>
                <ListItem>
                  <Para>OPPONENT</Para>
                  <Image alt="opponent choice" src={secondItem.imageUrl} />
                </ListItem>
              </GameImgUL>
              <ParaHead>{status}</ParaHead>
              <InfoBtn align="center" onClick={this.onClickPlayAgain}>
                PLAY AGAIN
              </InfoBtn>
            </ResultCon>
          )}
        </GameDivConatiner>
        <PopupContainer>
          <Popup
            modal
            trigger={
              <InfoContainer>
                <InfoBtn align="flex-end">RULES</InfoBtn>
              </InfoContainer>
            }
          >
            {colse => (
              <>
                <PopupImgContainer>
                  <InfoImg
                    alt="rules"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  />
                  <CloseBtn onClick={() => colse()}>
                    <RiCloseLine />
                  </CloseBtn>
                </PopupImgContainer>
              </>
            )}
          </Popup>
        </PopupContainer>
      </GameConatiner>
    )
  }
}
export default RockGame
