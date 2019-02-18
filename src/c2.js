import React from "react";
import { connect } from "react-redux";

class C2 extends React.Component {
  render() {
    return (
      <div>
        <p>
          Data Is Recived From The Store to Component 2 <br />
          Where No Relation Between the Component 1 and Component 2
        </p>
        <h1>Child 2 : {this.props.n}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    n: state.nameReducer.name
  };
};
export default connect(mapStateToProps)(C2);
