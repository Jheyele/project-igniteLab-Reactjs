import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sqs0st2d8k01z5e7l1crji/master',
    cache: new InMemoryCache()
})