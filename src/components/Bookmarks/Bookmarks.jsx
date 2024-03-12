import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="lg:w-1/3 bg-gray-200 rounded-xl p-4 ml-5 mt-5">
          <h1 className="text-3xl font-bold ml-4">Bookmarked Blogs : {bookmarks.length}</h1> 
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          } 
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}

export default Bookmarks;