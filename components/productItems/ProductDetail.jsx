
const ProductDetail = ({ data }) => {
    return (
        <div>
            {data.title}<br></br>
            {data.category}
        </div>
    )
}

export default ProductDetail