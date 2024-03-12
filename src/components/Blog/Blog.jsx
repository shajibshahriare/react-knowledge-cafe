import PropTypes from 'prop-types';
import { GoBookmark } from "react-icons/go";

const Blog = ({id, blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full rounded-2xl mb-8' src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-20 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><GoBookmark></GoBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}> <a href="">#{hashtag}</a> </span>)
                    
                }
                
            </p>
            <button onClick={()=> handleMarkAsRead(id, reading_time)} className='text-purple-700 font-bold underline'>Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
}
export default Blog;