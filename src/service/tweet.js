export default class TweetService {
  constructor(baseURL){
    this.baseURL = baseURL
  }
  

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    const response = await fetch(`${this.baseURL}/doweets${query}` ,{
      method:'GET',
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    if(response.status !== 200){
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/doweets` ,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({text, username : 'dobby', name: 'dobby'})
    });
    const data = await response.json();
    if(response.status !== 201){
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/doweets/${tweetId}` ,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    });
    if(response.status !== 204){
      throw new Error('error');
    }
  }

  async updateTweet(doweetId, text) {
    const response = await fetch(`${this.baseURL}/doweets/${doweetId}` ,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({text})
    });
    const data = await response.json();
    if(response.status !== 200){
      throw new Error(data.message);
    }
    return data;
  }
}
