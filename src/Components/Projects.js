import React from "react";


class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
        {this.props.type} is good
    </div>;
  }
}

export default Projects;
