import React, { Component } from "react";

class List extends Component {
  render() {
    const { people } = this.props;
    return (
      <>
        {people.map(({ id, name, age, image }) => {
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

export default List;
