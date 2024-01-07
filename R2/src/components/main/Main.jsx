import { useState } from "react";
import Item from "../item/Item";
import "./style.css";
import {connect} from 'react-redux';
import { change } from "../redux/Actions";


function Main(props) {
    const [list, setlist] = useState(props.phones);
    return (
    <div className="main-container">
        <button onClick={props.change} >Change</button>
        <ul className="navigation">
            <li onClick={()=>{setlist(props.phones)}}>Phones</li>
            <li onClick={()=>{setlist(props.computers)}}>Computer</li>
            <li onClick={()=>{setlist(props.cars)}}>Cars</li>
            <li onClick={()=>{setlist(props.products)}}>Products</li>
        </ul>
        <div className="store-container">
            {list.map((obj) => (
              <Item 
               brand={obj.brand}
               model={obj.model}
               price={obj.price}
               img_url={obj.img_url}
              />
            ))}
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps =(dispatch) => {
    return {
        change: () => dispatch(change()),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);