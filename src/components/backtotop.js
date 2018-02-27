import React, {Component} from 'react';

class BackToTop extends Component {
    constructor() {
        super();
        this.state = {
            isShowed: false
        }
        this.showUp = this
            .showUp
            .bind(this);
        this.backToTop = this
            .backToTop
            .bind(this);
        window.addEventListener('scroll', this.showUp);
    }
    showUp({target}) {
        if (!this.state.isShowed && ((target.documentElement.scrollTop && target.documentElement.scrollTop > 200) || (target.body.scrollTop && target.body.scrollTop > 200))) {
            this.setState({isShowed: true});
        } else if (this.state.isShowed && ((target.documentElement.scrollTop && target.documentElement.scrollTop <= 200) || (target.body.scrollTop && target.body.scrollTop <= 200))) {
            this.setState({isShowed: false});
        }
    }
    backToTop() {
        let T = setInterval(() => {
            if (document.body.scrollTop) {
                document.body.scrollTop = document.body.scrollTop - 100;
                document.body.scrollTop < 0
                    ? document.body.scrollTop = 0
                    : void 0;
                document.body.scrollTop === 0
                    ? clearTimeout(T)
                    : void 0;
            } else if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
                document.documentElement.scrollTop < 0
                    ? document.documentElement.scrollTop = 0
                    : void 0;
                document.documentElement.scrollTop === 0
                    ? clearTimeout(T)
                    : void 0;
            }
        }, 20);
    }
    render() {
        return (
            <div
                id="backtotop"
                style={{
                display: this.state.isShowed
                    ? 'block'
                    : 'none',
                top: '669px',
                right: '0px'
            }}
                onClick={this.state.isShowed
                ? this.backToTop
                : void 0}>回到顶部</div>
        )
    }
}

export default BackToTop;