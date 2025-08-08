import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
//Components
import NavBar from "./pages/components/NavBar";
//Pages
import HomePage from "./pages/Home";
import BubbleSortPage from "./pages/BubbleSort";
import QuickSortPage from "./pages/QuickSort";
import SinglyLinkList from "./pages/SinglyLinkLIst";
import Dijkstra from "./pages/Dijkstra";
import Dfs from "./pages/Dfs";
import MergeSort from "./pages/MergeSort";
import SelectionSort from "./pages/Selectionsort";

import { SnackbarProvider } from "notistack";
import Sudoku from "./pages/Sudoku";

function App() {
	return (
		<SnackbarProvider>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/bubblesort" exact component={BubbleSortPage} />
					<Route path="/quicksort" exact component={QuickSortPage} />
					<Route path="/selectionsort" exact component={SelectionSort}/>
					<Route path="/mergeSort" exact component={MergeSort}/>
					<Route path="/singlylinklist" exact component={SinglyLinkList} />
					<Route path="/dfs" exact component={Dfs} />
					<Route path="/dijkstra" exact component={Dijkstra} />
					<Route path="/Sudoku" exact component={Sudoku} />
				</Switch>
			</div>
		</SnackbarProvider>
	);
}

export default App;
