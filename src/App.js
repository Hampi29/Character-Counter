import {Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

// Replace your code here
class App extends Component {
  state = {userinp: '', inputsList: []}
  onChangingInp = event => {
    this.setState({userinp: event.target.value})
  }
  onAdding = () => {
    const {userinp} = this.state
    this.setState(prev => ({
      inputsList: [...prev.inputsList, userinp],
      userinp: '',
    }))
  }
  render() {
    const {userinp, inputsList} = this.state
    const isEmpty = inputsList.length === 0
    return (
      <div className="main-container">
        <div className="left-container">
          <h1>Count the characters like a Boss...</h1>
          {isEmpty ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-users"
            />
          ) : (
            <ul className="inputs-list">
              {inputsList.map(each => (
                <li key={uuidv4()}>
              
                  <p>{each}: {each.length}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="right-container">
          <h1>Character Counter</h1>
          <form onSubmit={this.onAdding}> 
          <input
            value={userinp}
            className="input-container"
            type="text"
            placeholder="Enter the Characters here"
            onChange={this.onChangingInp}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
