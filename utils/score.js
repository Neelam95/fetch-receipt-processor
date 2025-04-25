function pointsFromRetailer(receipt) {
    return receipt.retailer.replace(/[^a-zA-Z0-9]/g, '').length;
}

function pointsFromRoundTotal(receipt) {
    return parseFloat(receipt.total) % 1 === 0 ? 50 : 0;
}

function pointsFromQuarterTotal(receipt) {
    return parseFloat(receipt.total) % 0.25 === 0 ? 25 : 0;
}

function pointsFromItemPairs(receipt) {
    const itemCount = receipt.items.length;
    return Math.floor(itemCount / 2) * 5;
}

function pointsFromItemDescriptions(receipt) {
    let total = 0;
    for (let item of receipt.items) {
        const trimmed = item.shortDescription.trim();
        if (trimmed.length % 3 === 0) {
            const price = parseFloat(item.price);
            total += Math.ceil(price * 0.2);
        }
    }
    return total;
}

function pointsFromOddDay(receipt) {
    const day = new Date(receipt.purchaseDate).getDate();
    return day % 2 === 1 ? 6 : 0;
}

function pointsFromAfternoon(receipt) {
    const [hour, minute] = receipt.purchaseTime.split(':').map(Number);
    return (hour === 14 || (hour === 15 && minute === 0)) ? 10 : 0;
}

function calculatePoints(receipt) {
    return (
        pointsFromRetailer(receipt) +
        pointsFromRoundTotal(receipt) +
        pointsFromQuarterTotal(receipt) +
        pointsFromItemPairs(receipt) +
        pointsFromItemDescriptions(receipt) +
        pointsFromOddDay(receipt) +
        pointsFromAfternoon(receipt)
    );
}

module.exports = { calculatePoints };
