import React from 'react'

const Table = ({ data, headers, BlockTriggerById }) => {

    return (
      <React.Fragment>
  
        <table className={`table`}>
          {/* <Headers headers={headers} /> */}
  
          <Body data={data} BlockTriggerById={BlockTriggerById} />
        </table>
      </React.Fragment>
    )
  }

export default Table
