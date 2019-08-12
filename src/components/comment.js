import React from 'react';

function createMarkup(textIn) {
  return {__html: textIn};
}

const Comment = props => {
  return (
    <div className="left-comments">
      
        {(props.comment).map((item)=>{
          return (<p dangerouslySetInnerHTML={createMarkup(item)} />)  
        })}
      
    </div>
  )
}

export default Comment;