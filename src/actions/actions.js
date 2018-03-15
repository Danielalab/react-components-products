export const actionTypes = {
    CHANGE_TEXT_INPUT : 'CHANGE_TEXT_INPUT',
    SHOW_PRODUCTS_STOCK : 'SHOW_PRODUCTS_STOCK'
}

export const changeTextInput = text => ({
    type: actionTypes.CHANGE_TEXT_INPUT,
    text
});

export const showProductsStock = checkBoxValue => ({
    type: actionTypes.SHOW_PRODUCTS_STOCK,
    checkBoxValue
})