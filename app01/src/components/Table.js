import React from 'react'
import Body from './Body'

const Table = ({ data, headers, BlockTriggerById }) => {

    return (
      <React.Fragment>
  
        <table className={`table`}>
          {/* <Headers headers={headers} /> */}
  
          <tbody>
          <Body data={data} BlockTriggerById={BlockTriggerById} />
          </tbody>
        </table>
      </React.Fragment>
    )
  }

export default Table
