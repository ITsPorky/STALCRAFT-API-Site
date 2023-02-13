import { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "", isLoaded: false };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      "https://github.com/EXBO-Studio/stalcraft-database/blob/bfe507594b9fbc8c73fea077faabe50d131d7e8b/ru/items/armor/discoverer/9LrD.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }

  // Items component will hold items for a category of items
  // Item class will be individual items
  // ItemCategories will be the categories of items
  render() {
    return (
      <div className="Items">
        <p>{this.items}</p>
        {console.log(this.items)}
      </div>
    );
  }
}

export default Items;
