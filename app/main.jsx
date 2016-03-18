var React = require('react/addons');

console.log("hello from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(<GroceryItemList />, app); //app = id of div tag