import React, {useState} from "react";
import axios from "axios";
import Link from "next/link";



const InputElement = () => {

  const [inputText,setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return <div><input className="form-check-input dwi-zip-input"
      onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList,e.target.value]);
      }}
      placeholder="Enter Zip Code"/>
      <p className="dwi-zip-result">{inputText}</p>
      {/* <hr/><br/>
      <ul>{historyList.map((rec)=> { return <div>{rec}</div> })}
      </ul> */}
  </div>
};

class Zipcodeinput extends React.Component {
  static async getInitialProps() {
    var promise = axios
      .get("http://localhost:4000/zipcodeinput")
      .then(response => {
        return {
          hasErrored: false,
          zipcodeinputData: response.data
        };
      })
      .catch(error => {
        return {
          hasErrored: true,
          message: error.message
        };
      });
    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      zipcodeinputData: props.zipcodeinputData
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
    <div className="container dwi-div dwi-card">
      <div>
        <h5>Challenge #2</h5>
      </div>
      <div className="row">
        <div className="card-deck">

        <div className="card col-12 cardmin margintopbottom dwi-form-section">
          <form>
          <div className="form-group row">
            <div className="col-sm-6">
              <InputElement />
            </div>
            <div className="col-sm-6">
            {this.state.zipcodeinputData.map((zipcodeinput) =>
              <p className="dwi-zip-result form-check"  key={zipcodeinput.zipCode}>
                {zipcodeinput.city}, {zipcodeinput.stateAbbrevation} 
              </p>
            )}
            </div>
          </div>
        </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Zipcodeinput;
