import React, { Component } from 'react'

// Articles Class Component
// Returns a Card containing an Article
// Rendered by Articles.getArticles()
export default class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
    }

    // Binding `this`
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus() {
    this.setState((state) => ({
      isFocused:
        !state.isFocused
    }))
  }

  // eslint-disable-next-line consistent-return
  focusCard() {
    // Destructuring state
    const { isFocused } = this.state

    if (isFocused === true) {
      return 'focus'
    }
  }

  // eslint-disable-next-line consistent-return
  focusUnderline() {
    const { isFocused } = this.state

    if (isFocused === true) {
      return 'underline'
    }
  }

  // Return Article Card
  render() {
    // Destructuring props
    const { article } = this.props
    const {
      title,
      description,
      link,
      img,
    } = article

    return (
      <div
        className={`card hvr-grow ${this.focusCard()}`}
        onMouseEnter={this.handleFocus}
        onMouseLeave={this.handleFocus}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          alt={title}
        >
          <div className="top-crop">
            <img src={img} alt={title} />
          </div>
          <h2><span className={this.focusUnderline()}>{title}</span></h2>
        </a>
        <p>{description}</p>
      </div>
    )
  }
}
