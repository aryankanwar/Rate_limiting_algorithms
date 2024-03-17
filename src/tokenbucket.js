const  { MAX_BUCKET_SIZE, NUMBER_OF_REQUESTS, WINDOW_SIZE_FOR_RATE_LIMIT_IN_MILLISECONDS } = require('./constants.js');

class TokenBucket {
    constructor() {
        this.maxBucketSize = MAX_BUCKET_SIZE;
        this.numberOfRequests = NUMBER_OF_REQUESTS;
        this.windowSizeForRateLimitInMilliseconds = WINDOW_SIZE_FOR_RATE_LIMIT_IN_MILLISECONDS;
        this.nextRefillTime = -Infinity;
        this.numberOfTokenAvailable = 0;
        this.refill();
    }

    tryConsume() {
        this.refill();
        if (this.numberOfTokenAvailable > 0) {
            this.numberOfTokenAvailable--;
            return true;
        }
        return false;
    }

    refill() {
        if (Date.now() < this.nextRefillTime) {
            return;
        }

        this.lastRefillTime = Date.now();
        this.nextRefillTime = this.lastRefillTime + this.windowSizeForRateLimitInMilliseconds;
        this.numberOfTokenAvailable = Math.min(this.maxBucketSize, this.numberOfTokenAvailable + this.numberOfRequests);
    }
}

module.exports = TokenBucket;
