import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8bs5DywW1cvfgp2ywEfV_RkiKC1RvW_6SHTBu1w-iHohnKW3xqW7gCak1yXQHdW9Zql7c33efnsz8ecz1bCgKSpoCeW9luMGv5i9pMHmRfk9S1vPk9-RUwugSz4GYHYx'
    }
});