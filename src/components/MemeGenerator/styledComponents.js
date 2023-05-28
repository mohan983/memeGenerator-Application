import styled from 'styled-components'

export const StyledMainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: Open Sans;
`

export const StyledInputContainer = styled.form`
  background-color: transparent;
  background-size: cover;
  display: flex;
  flex-direction: column;
`

export const StyledHeading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-weight: bold;
`

export const StyledLabel = styled.label`
  color: #5a7184;
  font-size: 18px;
  margin-bottom: 3px;
`

export const StyledInput = styled.input`
  color: #7e858e;
  font-size: 16px;
  border: 2px solid #7e858e;
  padding: 10px;
  width: 25vw;
  margin-bottom: 8px;
  border-radius: 3px;
`

export const StyledSelect = styled.select`
  color: #7e858e;
  font-size: 16px;
  border: 2px solid #7e858e;
  padding: 10px;
  width: 25vw;
  margin-bottom: 10px;
  border-radius: 3px;
`

export const StyledButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  width: 100px;
  cursor: pointer;
`
export const StyledMemeContainer = styled.div`
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  height: 40vh;
  width: 35vw;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const StyledMemeParagraph = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  margin: 10px;
`
