export default class TweetService {
  constructor( http ){
    this.http = http;
  }
  

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/doweets${query}` ,{
      method:'GET',
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/doweets` ,{
      method:'POST',
      body:JSON.stringify({text, username : 'dobby', name: 'dobby'})
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/doweets/${tweetId}` ,{
      method:'DELETE',
    });
  }

  async updateTweet(doweetId, text) {
    return this.http.fetch(`/doweets/${doweetId}` ,{
      method:'PUT',
      body:JSON.stringify({text})
    });
  }
}
