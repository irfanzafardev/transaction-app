import axios from "axios";
import React, { useEffect, useState } from "react";

const TransactionList = () => {
	const [transactions, setTransactions] = useState([]);

	const rootAPI = "http://localhost:8800/api";
	const fetchTransactions = async () => {
		const { data } = await axios.get(rootAPI + "/transaction");
		setTransactions(data);
	};
	useEffect(() => {
		fetchTransactions();
	}, []);
	return (
		<section className="p-5">
			<header className="mb-3">
				<div>List transaksi:</div>
			</header>
			<div className="row">
				<div className="col-6">
					<ul className="list-group">
						{transactions.map((item) => (
							<li className="list-group-item" key={item.id}>
								{item.id}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default TransactionList;
