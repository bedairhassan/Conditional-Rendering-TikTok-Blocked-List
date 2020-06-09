import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  // could be an api call 
  const BlockTriggerById = id => {

    var blockedAccount = data.filter(item => item.id === id)[0]
    blockedAccount = { ...blockedAccount, isBlocked: !blockedAccount.isBlocked }

    const filteredList = data.filter(item => item.id !== id)

    const finalList = [...filteredList, blockedAccount]

    dataSet(finalList)
    console.table(data)
  }

  const [data, dataSet] = useState(
    [
      { id: 1, name: `Hassan`, isBlocked: false },
      { id: 2, name: `Aly`, isBlocked: false },
      { id: 3, name: `Mohammed`, isBlocked: false },
      { id: 4, name: `Mostafa`, isBlocked: true },
    ])

  return (<React.Fragment>
    <center>
      <Table
        data={data}
        headers={[`name`, `isBlocked`]}
        BlockTriggerById={BlockTriggerById}
      />
    </center>
  </React.Fragment>)
}












export default App;
