
app.get('/*', function(req,res){

res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))

});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);

function requireHTTPS(req, res, next) {

    // The 'x-forwarded-proto' check is for Heroku

    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {

        return res.redirect('https://' + req.get('host') + req.url);

    }



