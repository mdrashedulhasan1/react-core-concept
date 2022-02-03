import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    {name:"photoshop", price:"$50"},
    {name:"Illustrator", price:"$45"},
    {name:"PDF Reader", price:"$10"}
  ]
  const person1 = {
    name:"Tapu",
    job:"Web Designer"
  }
  const person2 = {
    name:"Rashedul",
    job:"Web Development"
  }
  const names = ["Tapu", "Rakibul", "Sarowal"];
  const allJob = ["Graphic Designer", "Web Designer", "Android Developer"];
  return (
    <div className="App">
          <Counter></Counter>
            {
              products.map(product => <ProductsWithMap product = {product}></ProductsWithMap>)
            }
    
          <Products product={products[0]}></Products>
          <Products product={products[1]}></Products>
          <Products product={products[2]}></Products>

          <TwoPerson name={person1.name} job={person1.job}></TwoPerson>
          <TwoPerson name={person2.name} job={person2.job}></TwoPerson>

          <Person2 name={names[0]} job={allJob[0]}></Person2>
          <Person2 name={names[1]} job={allJob[1]}></Person2>
          <Person2 name={names[2]} job={allJob[2]}></Person2>

          <Person name="Md. Rashedul Hasan" job="Web Development"></Person>
          <Person name="Tapu" job="Graphic Designer"></Person>
          <Person name="Sarowal" job="Android Developer"></Person>
          <Person name="Rakibul" job="Web Designer"></Person>
    </div>
  );
}

function Person(props) {
  const style = {
    color:"red",
    backgroundColor:"green",
    border:"5px solid blue",
    margin:"10px"
  }
  return (
    <div style={style}>
      <h1>My name is: {props.name}</h1>
      <h1>My job Web: {props.job}</h1>
    </div>
  )
}

function Person2(props){
  return(
    <div style={{color:"white",
    backgroundColor:"gray",
    border:"5px solid red",
    margin:"10px"}}>
       <h1>My name is: {props.name}</h1>
       <h1>My job Web: {props.job}</h1>
    </div>
  )
}

function TwoPerson(props){
  const style = {
    color:"red",
    backgroundColor:"green",
    border:"5px solid blue",
    margin:"10px"
  }
  return(
    <div style={style}>
      <h1>My name is: {props.name}</h1>
       <h1>My job Web: {props.job}</h1>
    </div>
  )
}

function Products(props){
  const style = {
    color:"white",
    backgroundColor:"green",
    border:"5px solid yellow",
    margin:"10px"
  }
  return(
    <div style={style}>
      <h1>Product Name: {props.product.name}</h1>
      <h2>Price: {props.product.price}</h2>
    </div>
  )
}

function ProductsWithMap(props){
  const style = {
    color:"yellow",
    backgroundColor:"gray",
    border:"5px solid yellow",
    margin:"10px"
  }
  const {name, price} = props.product; //Destructuring
  return(
    <div style={style}>
      <h1>Product Name: {name}</h1>
      <h2>Price: {price}</h2>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const style = {
    padding:"20px",
    backgroundColor:"red",
    color:"white",
    fontSize:"30px",
    marginRight:"40px"
  }
  return(
    <div>
          <h1>Count: {count}</h1>
          <button style={style} onClick={()=>setCount(count+1)}>Increment: </button>
          <button style={style} onClick={()=>setCount(count-1)}>Decrement: </button>
    </div>
  )
}

export default App;
