const getCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return [];
}

const setSaveCart = _id => {
    const saveCart = getCart();
    const exists = saveCart.find(cartId => cartId === _id);
    if (!exists) {
        saveCart.push(_id);
        localStorage.setItem('cart', JSON.stringify(saveCart))
    }
}

export { getCart, setSaveCart }