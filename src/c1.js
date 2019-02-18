import React from "react";
import getNameAction from "../src/actions/nameAction";
import { connect } from "react-redux";

class C1 extends React.Component {
  render() {
    return (
      //Firstly We are Created the JSX For the Child C1 Enter the Text ChildComponent
      <div>
        <p>
          When Data Enterted to Text Box the
          <br /> Action Method call and data is dispatched to <br />
          Reducer from the Reduser to store data Will be Save
        </p>
        <h1>Child 1 : </h1>
        <input ref="name" type="text" />
        <input
          type="button"
          value="Send Data"
          onClick={this.fnSendName.bind(this)}
        />
      </div>
    );
  }
  //fnSendName is the Function is to Discpatch the Data
  fnSendName() {
    debugger;
    console.log("FnSendNameClicked");
    let name = this.refs.name.value;
    getNameAction(name, this.props.dispatch);
  }
}
const mapDispatchToProps = d => {
  return {
    dispatch: d
  };
};

export default connect(
  null,
  mapDispatchToProps
)(C1);
