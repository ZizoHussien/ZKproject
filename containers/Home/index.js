import React, { PureComponent } from 'react'
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends PureComponent {
	render () {
		const {
			visited_times,
			setVisitedTimes,
		} = this.props

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Text>Visited times: {visited_times}</Text>

				<Button
					title="Go to Cart"
					onPress={() => {
						setVisitedTimes(visited_times + 1)
						this.props.navigation.navigate('Cart')
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({
	cart: {
		visited_times,
	},
}) => ({
	visited_times,
})

function mergeProps(stateProps, dispatchProps, ownProps) {
	const { dispatch } = dispatchProps;
	const { actions } = require('../../redux/CartRedux.js');

	return {
		...ownProps,
		...stateProps,
		setVisitedTimes: (visited_times) => actions.setVisitedTimes(dispatch, visited_times),
	};
}

export default connect(mapStateToProps, undefined, mergeProps)(Home)