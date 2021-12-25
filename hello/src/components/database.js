import React from 'react';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      homes: ''
    };
  }

  componentDidMount() {
    // axios.get('http://localhost:8080/')
    fetch('http://localhost:8080/')
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            homes: result.name
          });
        },
        // error handler
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, homes } = this.state;

    if (error) {
      return (
        <div className="col">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="col">
          Loading...
        </div>
      );
    } else {
        return (
            <div>
              {homes}
            </div>
          );
        }
    }
}
export default Home