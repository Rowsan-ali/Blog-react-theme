import 'react-dom';
import '../App.css';

function Feature_blog(){
    return(
        <>
        <div className='Feature_blog_container'>
            <div className='Feature-blog-img'>
                <img className='Feature-blog-image' src='https://images.unsplash.com/photo-1495476479092-6ece1898a101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluaW1hbHxlbnwwfHwwfHx8MA%3D%3D'></img>
            </div>
            <div className='Feature-blog-content'>
                <h1 className='Feature-blog-heading'>Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry</h1>
          <p className='Feature-blog-subheading'>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>when an unknown printer took a galley of type and scrambled it to make a<br></br> type specimen book. It has survived not
          </p>

          <button className='Feature-blog-btn'>Read more</button>
           </div>
        </div>
        </>
    )
}

export default Feature_blog;