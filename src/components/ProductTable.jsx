import ProductRow from './ProductRow';

function ProductTable(props) {
    const displayProducts = () => {
        return props.products.map((product) => {
            return (
                <ProductRow
                    key={product.id}
                    product={product}
                />
            )
        })
    }
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tbody>
              {displayProducts()}  
            </tbody>
        </table>
    )
}

export default ProductTable;