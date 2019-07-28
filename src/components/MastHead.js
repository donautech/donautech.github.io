import React from 'react';

class MastHead extends React.Component {
    render() {
        return (
            <header
                className={this.props.fieldEnabled ? "masthead ai text-white text-center" : "masthead text-white text-center"}
                style={{background: this.props.fieldEnabled ? "url(\"../img/bg_ai_weekly.jpeg\") no-repeat center center" : ""}}>
                <div className="overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">{this.props.title}</h1>
                        </div>
                        {this.props.fieldEnabled &&
                        <div className="col-xl-9 mx-auto form-group">
                            {/* Begin Mailchimp Signup Form */}
                            <form
                                action="https://gmx.us20.list-manage.com/subscribe/post?u=270d60d5d5a2d14fdc4f7d52b&id=d3ca9d9513"
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                className="validate" target="_blank" noValidate>

                                <div id="mc_embed_signup_scroll">
                                    <h3 htmlFor="exampleInputEmail1">Articles, videos, news and more! Join our
                                        community!</h3>
                                    <div className="form-group">
                                        <input type="email" className="form-control required" name="EMAIL"
                                               placeholder="name@example.com" id="mce-EMAIL"/>
                                    </div>
                                    <div className="clear" style={{position: "absolute", right: "0"}}><input
                                        type="submit" defaultValue="Subscribe" name="subscribe"
                                        id="mc-embedded-subscribe" className="btn btn-primary btn-lg btn-block"/></div>
                                    <small id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </small>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{display: 'none'}}/>
                                        <div className="response" id="mce-success-response" style={{display: 'none'}}/>
                                    </div>
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input
                                        type="text" name="b_270d60d5d5a2d14fdc4f7d52b_d3ca9d9513" tabIndex={-1}
                                        defaultValue/></div>

                                </div>
                            </form>

                            {/*End mc_embed_signup*/}

                        </div>
                        }
                    </div>
                </div>
            </header>
        );
    }
}

export default MastHead