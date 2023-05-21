function PageNotFound(){
    const styleH1 = {
        fontSize: '48px',
        marginBottom: '20px'
    };

    const styleP = {
        fontSize: '18px',
        marginBottom: '20px'
    };

    const styleA = {
        color: '#007bff',
        textDecoration: 'none'
    };

    return(
        <div className="container">
            <h1 style={styleH1}>Oops! Page Not Found</h1>
            <p style={styleP}>We're sorry, but the page you requested could not be found.</p>
            <p style={styleP}>Please check the URL for spelling errors or <a href="/" style={styleA}>click here</a> to go back to the homepage.</p>
        </div>
    );
}

export default PageNotFound;