import React from 'react';

const Comment = props => {
  return (
    <div className="left-comments">
      
        {(props.comment).map((item)=>{
          return <p>{item}</p>
        })}
      
    </div>
  )
}

export default Comment;