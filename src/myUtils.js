const api = {
    gaup: () => {
        return fetch('/gaup').then((res) => res.json())
    }
}

export { api }