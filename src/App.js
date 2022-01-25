import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Alert from '@mui/material/Alert';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      postId: null
    };
  }
  /* componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://batumievents.com/api/all-events?search=band', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
} */
  render() {
    const {postId} = this.state
  return (
    <div className="App">
  <Alert severity="success">This is a success message! {postId}</Alert>
     <Button variant="contained">Hello World</Button>

    </div>
  );
}
}
export default App;
