import React from 'react'

const Headers = ({ headers }) => <thead>
  {headers.map(header => <Header header={header} />)}
</thead>

export default Headers
