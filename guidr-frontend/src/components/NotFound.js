function NotFound() {
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'></link>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo'></link>
            <link rel='stylesheet' href='uikit/css/uikit.css'></link>
            <style>
            {`
                .page_404{
                    padding:40px 0; 
                    background:#fff; 
                    font-family: 'Arvo', serif;
                }

 

                .page_404  img{
                    width:100%;
                }

                

 

                .four_zero_four_bg{
                    background-image: url(https://media.giphy.com/media/dYUslDahf6Uw71gH3t/giphy.gif);
                    height: 700px;
                    background-position: center;
                    background-repeat: no-repeat;
                }

 

                .four_zero_four_bg h1{
                    font - size:100px;
                }

 

                .four_zero_four_bg h3{
                    font - size:500px;
                }

 

                .link_404{
                    color: #fff!important;
                    padding: 10px 20px;
                    background: #39ac31;
                    margin: 20px 0;
                    display: inline-block;
                }

 

                .contant_box_404{
                    margin - top:-50px;
                }
            `}
            </style>
            <body>
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center ">404</h1>
                                    </div>

                                    <div className="contant_box_404">
                                        <h3 className="h2">
                                            YOU HAVE TRAVELLED TOO FAR!
                                            <br/>
                                            Click here to go back to the homepage
                                            <br/>
                                            <a class="uk-button uk-button-default" href="">HOME</a>
                                        </h3>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default NotFound;