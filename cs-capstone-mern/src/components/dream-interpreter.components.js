/* WiP
This component will find keywords in dream journal and match those strings with similiar words.
Consider using https://www.datamuse.com/api/
 */
import React from 'react';
import { Component } from 'react';
import axios from 'axios';

export default class DreamInterpreter extends Component {
  // Constructor for sleep journal and DataMuse arrays
    constructor(props) {
        super(props);
        this.state = { 
            returnedWords: [],
            rhymingWords: {},
            dreamWord: []
        };

        this.getJournalWords();
        //this.getRhymingWords();
        this.onChangeDreamWord = this.onChangeDreamWord.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    // Returns Sleep Journal Object
    getJournalWords() {
        axios.get('http://localhost:5000/sleepjournal/')
        .then(response => {
          if (response.data.length > 0) {
            const resData = response.data;
            let journalString = []; // Array for storing journal words
            
            // push string description to journalString array
            resData.forEach(element => {
                journalString.push(element.description)
                //journalString.split(" ,")
                journalString.push(<br />) // Line breaks for each entry
            });
            // Parse Sub Strings Here
            console.log(journalString);
            this.setState({
                returnedWords: [journalString]
              })
            }
          })
        .catch((error) => {
          console.log(error);
        })
  }

  onChangeDreamWord(e) {
    this.setState({
      dreamWord: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    let dreamWordParam = this.state.dreamWord
    console.log(dreamWordParam);
    
  
  // DataMuse Docs:   https://www.datamuse.com/api/
  // Rhymes, Words that sound like, comparable adjectives. Need to determine which api call to make.
  // rel_jjb adjectives that are often used to describe

      // String interpolation for URL string query. 
      // WiP: Consider adding encoding via encodeURIComponent(), encodeURI(), or escape()
        axios.get(`https://api.datamuse.com/words?rel_jjb=${encodeURIComponent(dreamWordParam)}`) //, User Submitted word will be parameter as query string. 
        .then(response => {
          //Validate URI param is escaping "=%22, %=%25, ^=%5E, etc.
          //alert(encodeURIComponent(dreamWordParam))
          if (response.data.length > 0) {
            const resData = response.data;
            let rhymingWords = []; // Array for storing rhyming words
            
            // push string description to journalString array
            resData.forEach(element => {
              rhymingWords.push(element.word)
              // rhymingWords.push(element.score) Consider displaying word score
              rhymingWords.push(<br />) // Line breaks for each entry
            });
            console.log(rhymingWords);
            // WiP: Add conditional for no returned value

            this.setState({
                returnedRhymingWords: [rhymingWords]
              })
            }
          })
        .catch((error) => {
          console.log(error);
        })
      }

  // Render/Return JSX for Dream Interpreter
    render() {
        return (
        <div>
          <h1>Your Dream Journal Suggest....</h1>
          <div>
            <h3>First Review Your Past Dream Journal Entries</h3>
          {this.state.returnedWords}
          </div>
          <div>
            <h3>Now that You've Reviewed Your Entries, Input a Word to Find Out the Subjective Meaning</h3>
            <form onSubmit={this.onSubmit}>
            <input  type="text"
                required
                className="form-control"
                value={this.state.dreamWord}
                onChange={this.onChangeDreamWord}
                />
              <input type="submit" value="Submit Dream Word" className="btn btn-primary" />
            </form>
          </div>
          <div>
            <h3>Below Are Adjectives that Describe Your Dream Word</h3>
            {this.state.returnedRhymingWords}
          </div>
        </div>
        );
    }
}

// render() {
//   return (
//   <div className="App">
//   <h1>Your Dream Journal Suggest....</h1>
//   {this.state.returnedWords}
//   {this.state.returnedRhymingWords}
//   </div>
//   );
// }
