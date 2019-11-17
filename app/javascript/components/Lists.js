import React from "react"
import PropTypes from "prop-types"
export default class Lists extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lists: []
    };
  }
  componentDidMount(){
    this.setState({
      lists: this.props.lists
    })
  }
  render () {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>created_at</th>
              <th>updated_at</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lists.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <td>{list.title}</td>
                  <td>{list.desc}</td>
                  <td>{list.created_at}</td>
                  <td>{list.updated_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
