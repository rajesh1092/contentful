import React from "react";
import "./App.css";
import { client } from "./client";
import Posts from "./contentful/posts";
import Posts2 from "./contentful/posts2";

class App extends React.Component {
  state = {
    articles: [],
    product: [],
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: "demoContentful",
      })
      .then((entries) =>
        this.setState({
          articles: entries.items,
        })
      )
      .catch(console.error);

    client
      .getEntries({
        content_type: "product",
      })
      .then((entries) =>
        this.setState({
          product: entries.items,
        })
      )
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="logo">React and Contentful</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
              <Posts2 posts={this.state.product} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
