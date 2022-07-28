import React from "react";
import * as AllQuotes from "./utilities/quotesArr.json" 

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            quote: "",
            allQuotes: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log(AllQuotes)
        this.setState({
            ...this.state,
            quote: AllQuotes.default[Math.floor(Math.random() * AllQuotes.default.length) -1],
            allQuotes: AllQuotes.default
        })
    }
    handleClick(){
        console.log(this.state.quote)
        this.setState({
            ...this.state,
            quote: this.state.allQuotes[Math.floor(Math.random() * this.state.allQuotes.length) -1]
        })
    }
    render(){
        return(
            <div className="quote-machine" id="quote-box">
                <div className="machine-items">
                    <h2>Random Quote Machine: Front-End Libraries Projects</h2>
                    <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">Tweet on Twitter</a>
                    <div id="text">
                        { this.state.quote !== "" ? <h3 className="quote" >Your quote is: {" " + this.state.quote.quoteText}</h3> : <div />}
                    </div>
                 
                    <div id="author">
                        {this.state.quote !== "" ? <h3 className="quote" >Your author's name is: {" " + this.state.quote.quoteAuthor}</h3> : <div /> }
                    </div>
                
                    <button className="quote-btn" id="new-quote" onClick={this.handleClick}>Click here to get a Random Quote</button>
                    
                </div>
                
            </div>
        );
    }
}

export default App;