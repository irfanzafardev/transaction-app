import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const rootAPI = "http://localhost:8800/api";
	const fetchProducts = async () => {
		const { data } = await axios.get(rootAPI + "/product");
		setProducts(data);
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<section className="p-5">
			<header className="mb-3">
				<div>List produk:</div>
			</header>
			<div className="row">
				<div className="col-6">
					<ul className="list-group">
						{products.map((item) => (
							<li className="list-group-item" key={item.id}>
								{item.product_name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProductList;
