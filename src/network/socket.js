import socket from 'socket.io-client';

export default class Socket {
    constructor(baseUrl, getAccessToken){
        this.io = socket(baseUrl, {
            auth: (cb) => cb({token: getAccessToken()}),
        });
        
        
        this.io.on('connect_error',(err) => {
            console.log('socket error',err.message);
        })
    }

    onSync(event, callback){
        if(!this.io.connected){
            this.io.connect();
        }

        this.io.on(event, (message) => callback(message));
        return () => this.io.off(event);
    }

}