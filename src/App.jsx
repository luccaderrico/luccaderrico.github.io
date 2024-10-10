import './App.css'
import { Component } from "react";
import { Outlet } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null
    };
    this.handleDataFetched = this.handleDataFetched.bind(this);
    this.handleError = this.handleError.bind(this);
  };

  handleDataFetched(data) {
    this.setState({ data });
  };

  handleError(error) {
    this.setState({ error });
  };

  render() {
    const { error } = this.state;

    if (error) return <p>Error: {error.message}</p>;

    return (
      <>
      <div className='flex flex-col w-full h-full'>
        <div id="detail" className="flex flex-row w-full h-full">
          <Outlet/>
        </div>
      </div>
      </>
    );
  };
}

export default App;