let APIURL = '';

switch(window.location.hostname) {
    //local host name fo react app
    case 'localhost' || '127.0.0.1' :
        //local host name of API
        APIURL = "http://localhost:3000";
        break;
        //deployed react application
    case 'moppet-app-client-cmh.herokuapp.com':
        //full url of your deployed API
        APIURL = 'https://moppet-app-server-cmh.herokuapp.com';
        break;
}

export default APIURL;