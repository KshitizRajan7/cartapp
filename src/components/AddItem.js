import React from "react";

class addItem extends React.Component {
  constructor(props) {
    //managing the state of the form
    super(props);
    this.state = {
      productName: "",
      productPrice:''
    };
  }
  state = {};
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault(); //prevent the reload of the page
          this.props.addItem(this.state.productName, Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) }); //ensure that the value is number
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4 ">
          Add Item
        </button>
      </form>
    );
  }
}

export default addItem;
