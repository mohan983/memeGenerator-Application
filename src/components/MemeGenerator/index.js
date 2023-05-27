import {Component} from 'react'
import {
  StyledMainContainer,
  StyledInputContainer,
  StyledHeading,
  StyledLabel,
  StyledInput,
  StyledSelect,
  StyledButton,
  StyledMemeContainer,
  StyledMemeParagraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    isMemeGenerated: false,
  }

  onChangeImageUrl = e => {
    this.setState({imgUrl: e.target.value})
  }

  onChangeTopText = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottomText = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  onClickGenerate = () => {
    this.setState({isMemeGenerated: true})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, isMemeGenerated} = this.state
    console.log(isMemeGenerated)
    return (
      <StyledMainContainer>
        <StyledInputContainer onSubmit={this.onClickGenerate}>
          <StyledHeading>Meme Generator</StyledHeading>
          <StyledLabel htmlFor="imageUrl">Image URL</StyledLabel>
          <StyledInput
            id="imageUrl"
            type="text"
            placeholder="Enter the Image URL"
            value={imgUrl}
            onChange={this.onChangeImageUrl}
          />
          <StyledLabel htmlFor="topText">Top Text</StyledLabel>
          <StyledInput
            id="topText"
            type="text"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.onChangeTopText}
          />
          <StyledLabel htmlFor="bottomText">Bottom Text</StyledLabel>
          <StyledInput
            id="bottomText"
            type="text"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
          <StyledLabel htmlFor="fontSize">Font Size</StyledLabel>
          <StyledSelect
            id="fontSize"
            type="select"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.displayText}>
                {eachItem.displayText}
              </option>
            ))}
          </StyledSelect>
          <StyledButton type="submit">Generate</StyledButton>
        </StyledInputContainer>
        {isMemeGenerated ? (
          <StyledMemeContainer imgUrl={imgUrl} data-testid="meme">
            <StyledMemeParagraph fontSize={fontSize}>
              {topText}
            </StyledMemeParagraph>
            <StyledMemeParagraph fontSize={fontSize}>
              {bottomText}
            </StyledMemeParagraph>
          </StyledMemeContainer>
        ) : (
          ''
        )}
      </StyledMainContainer>
    )
  }
}

export default MemeGenerator
