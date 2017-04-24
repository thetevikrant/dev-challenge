import { URI, DESTINATION } from '../const';

/**
 * create client, creates the connection and listen to the server.
 *
 */
export function getFxPrices() {
	return function(dispatch) {
        const url = URI;
        const client = Stomp.client(url);
		// create connection to websocket
        client.connect({}, function() {
		    // subscribe to the destination
            client.subscribe(DESTINATION, function(message) {
		        // called when the client receives a STOMP message from the server
		        if (message.body) {
					dispatch({type: "GET_FX_PRICE_DATA", payload: JSON.parse(message.body)});
		        } else {
		            dispatch({type: "GET_FX_PRICE_DATA", payload: null});
		        }
            });
        }, function(error) {
            dispatch({type: "FETCHING_ERROR", payload: 'Oops! Some error occured. Unable to retrive fx prices.'});
        })
	}
}

