import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

const Trigger = graphql(gql`
  query {
    people {
      # adding the ID will fix the issue
      # id
      lastName
    }
  }
`)(() => <div />);

class App extends Component {
  state = { showTheError: false };
  componentDidMount() {
    setTimeout(() => this.setState({ showTheError: true }), 5000);
  }
  render() {
    const { data: { loading, people } } = this.props;
    const { showTheError } = this.state;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
          <p>
            This is a template that you can use to demonstrate an error in Apollo Client.
            Edit the source code and watch your browser window reload with the changes.
          </p>
          <p>
            The code which renders this component lives in <code>./src/App.js</code>.
          </p>
          <p>
            The GraphQL schema is in <code>./src/graphql/schema</code>.
            Currently the schema just serves a list of people with names and ids.
          </p>
        </header>
        {(loading || !people) ? (
          <p>Loading…</p>
        ) : (
          <ul>
            {people.map(person => (
              <li key={person.id}>
                {person.firstName}
              </li>
            ))}
          </ul>
        )}
        {showTheError && <Trigger />}
      </main>
    );
  }
}

export default graphql(
  gql`{
    people {
      id
      firstName
    }
  }`,
)(App)
