export default class TweetService {
  constructor( http,tokenStorage ){
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/doweets${query}` ,{
      method:'GET',
      headers: this.getHeaders(),
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/doweets` ,{
      method:'POST',
      headers: this.getHeaders(),
      body:JSON.stringify({text, username : 'dobby', name: 'dobby'})
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/doweets/${tweetId}` ,{
      method:'DELETE',
      headers: this.getHeaders(),
    });
  }

  async updateTweet(doweetId, text) {
    return this.http.fetch(`/doweets/${doweetId}` ,{
      method:'PUT',
      headers: this.getHeaders(),
      body:JSON.stringify({text})
    });
  }

  getHeaders(){
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    }
  }
}
