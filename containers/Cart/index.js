import React, { PureComponent } from 'react'
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Cart extends PureComponent {
	render () {
		const {
			visited_times,
			setVisitedTimes,
		} = this.props

		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Cart Screen</Text>
				<Text>Visited times: {visited_times}</Text>

				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
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

export default connect(mapStateToProps, undefined, mergeProps)(Cart)