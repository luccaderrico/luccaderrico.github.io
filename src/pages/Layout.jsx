import { Component } from 'react';
import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbar";

class Layout extends Component {

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
        return (
          <div className='flex flex-col h-full w-full text-center'>
            <Outlet />
          </div>
        );
      };
}

export default Layout;