import React, { useState } from 'react'
import './App.css';
import { BsSearch } from 'react-icons/bs';

function App() {
	const productList = ["The Great Gatsby",
"To Kill A Mockingbird",
"The Alchemist",
"Subtle art of Not Giving A "];
	const [products, setProducts] = useState(productList);
	const [searchVal, setSearchVal] = useState("");
	function handleSearchClick() {
		if (searchVal === "") { setProducts(productList); return; }
		const filterBySearch = productList.filter((item) => {
			if (item.toLowerCase()
				.includes(searchVal.toLowerCase())) { return item; }
		})
		setProducts(filterBySearch);
	}
	const mystyle = {
		marginLeft: "600px",
		marginTop: "20px",
		fontWeight: "700"
	};

	return (
		<div>
			<div style={mystyle}>
				<input onChange={e => setSearchVal(e.target.value)}>
				</input>
				<BsSearch onClick={handleSearchClick} />
			</div>
			<div>

				{products.map((product) => {
					return (
						<div style={mystyle}>{product}</div>
					)
				})
				}

			</div>
		</div>
	);
}

export default App;
