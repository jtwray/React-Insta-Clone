import React from "react";

const InputBox =(props) => {
    return(
        <form onSubmit={this.submitHandler}>
        <input
          value={this.state.listItem}
          placeholder="New Item"
          type="text"
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    )
}




export default InputBox;