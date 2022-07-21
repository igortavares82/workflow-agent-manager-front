import React from 'react'
import PropTypes from 'prop-types'
import AgentsApi from 'api/AgentApi'

const AgentTable = ({ data }) => {
    
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Number</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody>
                {data.map((agent) => {
                    return (
                        <tr>
                            <td>{agent.name}</td>
                            <td>{agent.number}</td>
                            <td>{agent.status}</td>
                            <td>
                                
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

AgentTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AgentTable;