const product = (data) => ({
    title: data.title,
    price: data.price,
    thumbnail: data.thumbnail
});

const productList = (resources) =>resources.map((resource)=>product(resource));

module.exports = {
    product,
    productList
}