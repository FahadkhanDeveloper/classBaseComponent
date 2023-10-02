import {Component} from 'react'
import "./Home.css"
class Home extends Component
// or 
// class Home extends React.Component

{
    // render is method of component and we will override this method
    // means we cannot use defalt behavior
    render() {
        // this function will reurn jsx
        return(
        <div>
            <p className="test">Hi this paragraph in Home Component</p>
            <button className="btn btn-primary">Click</button>
        </div>
        );
    }
}
export default Home;