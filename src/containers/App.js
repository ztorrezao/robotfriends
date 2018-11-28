import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	render() {
		const {robots, searchField} = this.state;

		const filteredRobots = robots.filter( robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});

		return robots.length === 0 ?
			(
				<h1 className="tc">Loading RobotFriends...</h1>
			) : (
				<div className="tc">
					<h1 className="f1">RobotFriends</h1>
					<SearchBox searchChange = {this.onSearchEvent} />
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			)
		}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users})); 
	}

	onSearchEvent = (event) => {
		this.setState({
			searchField: event.target.value
		})
	} 
}

export default App;