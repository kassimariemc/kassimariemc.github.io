import React, { Component } from "react";
import "./style.css";

export default class Jumbotron extends Component {

  componentDidMount() {
    // Typewritter effect
    const words = ['Web developer...', 'Student...', 'Problem solver...', 'Planner...', 'Beer drinker...', 'Hiker...', 'List checker...'];
    const typeEffectEl = document.querySelector('#type-effect');
    let letterIndex = 0;
    let wordIndex = 0;

    initTyping();

    function initTyping() {
      if (wordIndex < words.length) {
        window.setTimeout(() => {
          typeEffectEl.innerHTML = '';
          letterIndex = 0;
          printLetters(words[wordIndex]);
        }, 1000);
      }
      else {
        wordIndex = 0;
        initTyping();
      }
    }

    function printLetters(word) {
      window.setTimeout(() => {
        if (letterIndex < word.length) {
          typeEffectEl.innerHTML += word[letterIndex];
          letterIndex++;
          printLetters(word);
        } else {
          wordIndex++;
          initTyping();
        }
      }, 100);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron text-center opener">
              <h1 className="display-4">Kassi Stumb</h1>
              <p className="lead" id="type-effect"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
