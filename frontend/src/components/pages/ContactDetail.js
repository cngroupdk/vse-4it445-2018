import React from 'react';
import axios from 'axios';


export class ContactDetail extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      console.log(res)
      this.setState({
        contact: res.data,
      })
    })
  }
  render() {
    return (
      <p>{JSON.stringify(this.state.contact)}</p>
    )
  }
}
