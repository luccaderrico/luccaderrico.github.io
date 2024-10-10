import { Component } from 'react'

class CV extends Component
{
    render() {
        return (
            <div className='flex center'>
                <object className='flex center pdf'
                    data="../../static/CV.pdf"
                    width="800"
                    height="500">
                </object>
            </div>
        );
    }
}

export default CV;