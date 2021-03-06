import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px;
  height:30px;
  border: solid 1px #555;
  border-radius: 15px;
  box-sizing:border-box;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  background-color: #eee;
  box-shadow: 0px 0px 5px #aaa inset;
`
export const Icon = styled.span`
  width:50px;
  box-sizing:border-box;
  color: rgb(143, 10, 163);
  padding-left:10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const Input = styled.input`
  width: calc(100% - 55px);
  box-sizing:border-box;
  border:none;
  background-color: transparent;
`