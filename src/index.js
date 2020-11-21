import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45PM'
        content='Nice blog!'
        avatar={faker.image.animals()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 5:41PM'
        content='I agree!'
        avatar={faker.image.animals()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 6:45PM'
        content='I disagree!'
        avatar={faker.image.animals()}
      />
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));
