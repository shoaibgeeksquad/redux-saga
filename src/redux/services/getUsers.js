export const getUsers = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    )
}

export const deleteSingleRecord = (id) => {
    return (
        fetch("https://jsonplaceholder.typicode.com" + `/users/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    )
}