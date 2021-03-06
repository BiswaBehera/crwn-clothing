import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStatesToProps = createStructuredSelector({
	collections: selectShopCollectionForPreview,
})

export default connect(mapStatesToProps)(CollectionsOverview);