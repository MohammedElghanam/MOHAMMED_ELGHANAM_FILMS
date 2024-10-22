class Express{
    constructor(){
        this.req={
            headers:{
                Authorization : 'Bearer......'
            }
        }
        this.res={
            send: function(text){
                console.log(text);
            }
        }
    }

    use(callback){
        callback(this.req, this.res);
    }


}
const app = new Express();
function authMiddleware(req,res,next) {
    const token =req.headers.Authorization;
    res.send(token)
}
app.use(authMiddleware);


