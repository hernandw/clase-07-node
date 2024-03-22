const getId = () => {
    const date = Date.now().toString(8).slice(2)
    const random = Math.random().toString(36).slice(2)

    return date + random
}

module.exports = getId