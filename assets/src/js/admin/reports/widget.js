// Entry point for dashboard widget

// Vendor dependencies
import ReactDOM from 'react-dom';
import moment from 'moment';

// Reports widget
import Widget from './widget/index.js';

import { StoreProvider } from './store';
import { reducer } from './store/reducer';

const initialState = {
	// Initial period range (defaults to the past week)
	period: {
		startDate: moment( window.giveReportsData.allTimeStart ),
		endDate: moment(),
		range: 'week',
	},
	pageLoaded: false,
	donationsFound: null,
};

ReactDOM.render(
	<StoreProvider initialState={ initialState } reducer={ reducer }>
		<Widget />
	</StoreProvider>,
	document.getElementById( 'givewp-reports-widget' )
);
