import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{ items.map(item => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	)
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));