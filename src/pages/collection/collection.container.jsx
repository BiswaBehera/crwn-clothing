import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectHasCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectHasCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
