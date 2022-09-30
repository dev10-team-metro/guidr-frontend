
function Facts() {
    return (
        
        <div data-uk-slideshow="animation: push">
            <div className="uk-position-relative">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-position-relative uk-visible-toggle" tabIndex="0">
                <ul className="uk-slideshow-items">
                    <li data-uk-slideshow-item="0">
                        <h1 class="uk-card-title">Fun Fact</h1>
                        <p>Fun fact will be pulled from backend to here.</p>
                    </li>
                    <li data-uk-slideshow-item="1">
                        <h1 class="uk-card-title">Fun Fact</h1>
                        <p>Fun fact example 2.</p>
                    </li>
                </ul>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
            </div>
            <div className="uk-position-bottom-center">
                <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
                    </ul>
            </div>
        </div>
        </div>
    )
}
export default Facts