import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

const App = props => {
  console.log(props);

  return (
  <div className="ui container comments">
    <ApprovalCard />
    <CommentDetail author="Sam" timeAgo="4:30pm" text="Cool bro" avatar={faker.image.avatar()}/>
    <CommentDetail author="Alex" timeAgo="5:40pm" text="Wow you're hot" avatar={faker.image.avatar()} />
    <CommentDetail author="Max" timeAgo="2:30pm" text="You're digging it" avatar={faker.image.avatar()} />
  </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));



