import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [data, dataSet] = useState(
    [
      { id: 1, name: `Hassan`, isBlocked: false },
      { id: 2, name: `Aly`, isBlocked: false },
      { id: 3, name: `Mohammed`, isBlocked: false },
      { id: 4, name: `Mostafa`, isBlocked: true },
    ])

  return (<React.Fragment>





    <Table data={data} headers={[`id`, `name`, `isBlocked`]} />
  </React.Fragment>)
}

const Button = ({ onClick, name, className }) =>
  <button
    className={className}
    onClick={onClick}>{name}</button>

const Table = ({ data, headers }) => {

  return (
    <React.Fragment>
      This is Table.

      <Headers headers={headers} />

      <Body data={data} />
    </React.Fragment>
  )
}

const Body = ({ data }) =>
  data.map(({ id, name, isBlocked }) => {

    // const idd = `id is ${id}`

    const BlockElement = !isBlocked ?
      <Button
        onClick={() => alert(`block`)}
        name={`Block`}
        className={"btn btn-danger"}
      /> :
      <Button
        onClick={() => alert(`unblock`)}
        name={`Unblock`}
        className={"btn btn-secondary"}
      />


    return (

      <tr key={id}>
        {/* <td>{idd}</td> */}
        <td>{name}</td>
        <td>{isBlocked ? `yes` : `no`}</td>
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
