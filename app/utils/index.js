import _ from 'underscore';

/**
 * update the data with new values and calculates the mid price.
 *
 * @param {object} data - the state value for component.
 * @param {object} newData - the new object received.
 */
export function updateData(data, newData) {
    let match = _.find(data, function(item) { return item.name === newData.name })
    if (match) {
        match.bestAsk = newData.bestAsk;
        match.bestBid = newData.bestBid;
        match.lastChangeAsk = newData.lastChangeAsk;
        match.lastChangeBid = newData.lastChangeBid;
        match.openAsk = newData.openAsk;
        match.openBid = newData.openBid;
        let midBid = (newData.bestAsk + newData.bestBid) / 2;
        match.sparklines.push(midBid);
        match.sparklines.shift();
    } else {
        newData.sparklines = [0, 0, 0, 0];
        let midBid = (newData.bestAsk + newData.bestBid) / 2;
        newData.sparklines.push(midBid);
        data.push(newData);
    }
    return data;
}