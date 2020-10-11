import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "./index.js";
import { quotes } from "./quotes";
import { colors } from "./colors";

interface AppProps {}
interface AppState {
  color: string;
  quote: string;
  author: string;
}

class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-white">
        <hr />
        <p>
          Written and coded by{" "}
          <a
            className="text-white"
            id="profile-link"
            href="https://www.freecodecamp.com/parloti"
            target="_blank"
          >
            <strong>
              <u>Alex Parloti</u>
            </strong>
          </a>
          .
        </p>
      </footer>
    );
  }
}
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      quote: "",
      author: ""
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    const { quote, author } = quotes[Math.floor(Math.random() * quotes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color, quote, author });
  }

  getTwitterLink() {
    var baselink =
      "https://twitter.com/intent/tweet?hashtags=quotes,parloti&related=freecodecamp&text=";
    return baselink + '"' + this.state.quote + '" ' + this.state.author;
  }

  getTumblrLink() {
    var prefixLink =
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=";
    var suffix =
      "&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button";
    return (
      prefixLink + this.state.author + "&content=" + this.state.quote + suffix
    );
  }

  componentDidMount() {
    this.newQuote();
  }

  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid h-100 m-0"
        style={{ backgroundColor: this.state.color }}
      >
        <div className="h-100 d-flex flex-column align-items-stretch">
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <div id="quote-box">
              <div className="card">
                <div className="card-body">
                  <div
                    className="card-text"
                    style={{ color: this.state.color }}
                  >
                    <div>
                      <span className="fa fa-quote-left" aria-hidden="true" />
                      <span id="text">{this.state.quote}</span>
                    </div>
                    <div className="d-flex flex-row-reverse">
                      <div className="p-2">
                        - <span id="author">{this.state.author}</span>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                      <div
                        className="btn-group share"
                        role="group"
                        style={{ color: this.state.color }}
                      >
                        <a
                          id="tweet-quote"
                          type="button"
                          className="btn btn-secondary"
                          target="_blank"
                          href={this.getTwitterLink()}
                        >
                          <span
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          />
                        </a>
                        <a
                          type="button"
                          className="btn btn-secondary"
                          target="_blank"
                          href={this.getTumblrLink()}
                        >
                          <span
                            className="fa fa-tumblr-square"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <div className="btn-group" role="group">
                        <button
                          id="new-quote"
                          type="button"
                          className="btn btn-secondary new-quote"
                          onClick={this.newQuote}
                          style={{ backgroundColor: this.state.color }}
                        >
                          New quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
