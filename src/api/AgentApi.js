import React, { useState, useEffect } from 'react'

const AgentsApi = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/agents/')
        .then((response) => response.json())
        .then((data) => setAgents(data))
    }, [])

    return agents
}

export default AgentsApi