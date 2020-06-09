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
  }

  const [data, dataSet] = useState(
    [
      { id: 1, name: `Hassan`, isBlocked: false },
      { id: 2, name: `Aly`, isBlocked: false },
      { id: 3, name: `Mohammed`, isBlocked: false },
      { id: 4, name: `Mostafa`, isBlocked: true },
    ])

  return (<React.Fragment>
    <Table
      data={data}
      headers={[`name`, `isBlocked`]}
      BlockTriggerById={BlockTriggerById}
    />
  </React.Fragment>)
}

const Button = ({ onClick, name, className }) =>
  <button
    className={className}
    onClick={onClick}>{name}</button>

const Table = ({ data, headers, BlockTriggerById }) => {

  return (
    <React.Fragment>

      {/* <table className={`table`}> */}
        <Headers headers={headers} />

        <Body data={data} BlockTriggerById={BlockTriggerById} />
      {/* </table> */}
    </React.Fragment>
  )
}

const Body = ({ data, BlockTriggerById }) =>
  data.map(({ id, name, isBlocked }) => {

    // const idd = `id is ${id}`

    const BlockElement = !isBlocked ?
      <Button
        onClick={() => BlockTriggerById(id)}
        name={`Block`}
        className={"btn btn-danger"}
      /> :
      <Button
        onClick={() => BlockTriggerById(id)}
        name={`Unblock`}
        className={"btn btn-secondary"}
      />


    return (

      <tr key={id}>
        {/* <td>{idd}</td> */}
        <td>{name}</td>
        {/*  <td>{isBlocked ? `yes` : `no`}</td> */}
        <td>{BlockElement}</td>
      </tr>
    )

  })


const Headers = ({ headers }) => <thead>
  {headers.map(header => <Header header={header} />)}
</thead>

const Header = ({ header }) =>
  <th>{header}</th>

export default App;
