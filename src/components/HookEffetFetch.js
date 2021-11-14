import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/api/users'

const fetchUser = async userId => {
    const options = { 'headers': { 'accept-language': 'fr' } }
    const response = await fetch(`${url}/${userId}`, options)
    const user = await response.json()
    return user
}


const HookEffetFetch = ({ userId = 0 }) => {
    const [name, setName] = useState('')
    useEffect(async () => {
        const user = await fetchUser(userId)
        setName(user.name)
    }, [])

    return <div>{name}</div>
}

export default HookEffetFetch