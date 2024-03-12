import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="lg:w-1/3 bg-gray-200 rounded-xl p-4 ml-5 mt-5">
            <div>
                <h2 className="text-4xl bg-white p-4 rounded-xl mb-4">Spent Time on Read : {readingTime}</h2>
            </div>
          <h1 className="text-3xl font-bold ml-4">Bookmarked Blogs : {bookmarks.length}</h1> 
          {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          } 
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number
}

export default Bookmarks;