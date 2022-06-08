import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from './redux/ducks/user';
import { getUser } from './redux/ducks/user'

interface IState {
  counter: {
    count: number;
  };
  user: {
    user: IUser[];
  }
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])
  

  const count = useSelector((state: IState) => state.counter.count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];

  const users = useSelector((state:IState) => state.user.user);
  console.log(users);


  return (
    <div className="App">
      <h1>Redux ducks counter</h1>
      {users && users.map((user)=>(<h3>{user.username}</h3>))}
      <h2> Total Votes: {count}</h2>
      {voters.map((name) => (
        <Counter name={name} />
      ))}
    </div>
  );
}

export default App;
