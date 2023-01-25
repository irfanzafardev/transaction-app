import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TransactionList from "../../components/transaction/TransactionList";

const TransactionPage = () => {
	return (
		<>
			<Navbar />
			<TransactionList />
		</>
	);
};

export default TransactionPage;
