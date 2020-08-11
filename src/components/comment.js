import React from 'react';

function createMarkup(textIn) {
  return {__html: textIn};
}

const Comment = props => {
  return (
    <div>
      
        {(props.comment).map((item)=>{
          return (
            <div className="left-comments">
              <p dangerouslySetInnerHTML={createMarkup(item)} />
            </div>
          )  
        })}
      
    </div>
  )
}

export default Comment;