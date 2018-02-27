import React, {Component} from 'react'

class Pagination extends Component {
    render() {
        return (
            <div className="pagination" current_page="1">
                <ul>
                    <li className="disabled">
                        <a>«</a>
                    </li>
                    <li className="disabled active">
                        <a>1</a>
                    </li>
                    <li>
                        <a href="/?tab=all&amp;page=2">2</a>
                    </li>
                    <li>
                        <a href="/?tab=all&amp;page=3">3</a>
                    </li>
                    <li>
                        <a href="/?tab=all&amp;page=4">4</a>
                    </li>
                    <li>
                        <a href="/?tab=all&amp;page=5">5</a>
                    </li>
                    <li>
                        <a>...</a>
                    </li>
                    <li>
                        <a href="/?tab=all&amp;page=106">»</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination;