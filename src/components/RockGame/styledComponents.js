import styled from 'styled-components'

export const GameConatiner = styled.div`
    height:150vh;
    background-color:#223a5f;
    padding:50px;
    display:flex;
    flex-direction:column;
`
export const GameDivConatiner = styled.div`
    width:60%;
    align-self:center;
`
export const ScoreBoard = styled.div`
    padding:10px;
    padding-left:60px;
    padding-right:60px;
    border-radius:5px;
    border-width:2px;
    border-color:white;
    border-style:solid;
    display:flex;
    justify-content:space-between;

`
export const GameItemNames = styled.div``
export const Para = styled.p`
    color:white;
    font-family:"Bree Serif";
    margin-left:${props => (props.margin ? props.margin : null)};
`
export const ScoreView = styled.div`
    background-color:white;
    border-radius:5px;
    width:100px;
    text-align:center;
`
export const ScoreTxt = styled.p`
    color:#223a5f;
    font-family:"Bree Serif";
`
export const Score = styled.p`
    color:#223a5f;
    font-weight:600;
    font-size:25px;
    font-family:"Roboto;
`
export const GameImgUl = styled.ul`
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const InfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-slef:flex-end;
`
export const InfoBtn = styled.button`
    color:blue;
    background-color:white;
    border-width:0px;
    border-radius:5px;
    padding:10px;
    font-weight:600;
    align-slef:${props => (props.align ? props.align : null)};
    display:${props => (props.display ? props.display : null)};
    justify-content:${props => (props.justify ? props.justify : null)};
`
export const PopupContainer = styled.div``
export const InfoImg = styled.img`
    height:80vh;
    margin:20px;
`
export const CloseBtn = styled.button`
    border-width:0px;
    align-self:flex-start;

`
export const PopupImgContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`
export const ParaHead = styled.p`
    font-weight:600;
    color:white;
    align-self:center;
`
export const ListItem = styled.li`
    margin:4 0px;
    margin-top:5px;
    flex-wrap:wrap;
`
export const GameImgUL = styled.ul`
    list-style-type:none;
    margin-left:0px;
    padding-left:0px;
    width:80%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
`
export const ResultCon = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const GameListItem = styled.li`
    margin:40px;
`
export const Button = styled.button`
    border-width:0px;
    background-color:transparent;
`
export const Heading = styled.h1`
    margin:0px;
    padding:0px;
    color:white;
    font-family:"Bree Serif";
`
export const Image = styled.img`
    height:150px;
    
`
