import React from 'react';

let commentsArray = [];

commentsArray.push("I am so pleased with AUS-TEX Printing and Mailing. This will be the 3rd year AUS-TEX has helped my business grow by keeping my business in the minds of my customers. Once a month a card advertising my business is sent to 2,000 of my customers. AUS-TEX helped me design, print and send my cards. The staff is awesome, from the receptionist at the front desk, to the design staff and especially the staff member in charge of my account, professionals all. I am extremely happy with the individualized attention to details, I feel like they know me now and my business, but most importantly how to reach my customers in a meaningful and profitable way. I look forward to many years of growing with AUS-TEX Printing and Mailing. - <b>Roxanne C.</b>");
commentsArray.push("The Annual Reviews arrived earlier this afternoon! And, as I expected, they look fantastic. Thank you for accommodating our constantly shifting timeline and for ensuring a quick turnaround in delivering the product! Of course, we are thrilled with the final product. You all do amazing work that accommodates our budget and I couldn’t be happier. Thank you also for your careful checking and re-checking of our proofs, for consistently following up, and for being so enthusiastic and professional throughout the whole process. I look forward to working with you again next year! - <b>Sarah</b>");
commentsArray.push("From finding 80% pcw paper that helps our company model its mission, to double checking paper and print specs, to a seamless transfer between contacts, to 11th, 12th (and 13th) hour changes, to day-of on-time delivery of a perfectly executed print program that we can be proud to stand by, Austex’s service both customer and product are amazing. Thank you for always coming through and at an amazingly competitive price at that. Your services do not go unnoticed! - <b>Monica</b>");
commentsArray.push("Austex has helped us with our Year in Review Annual Reports and various program guides throughout the year. Our materials look great and their designers and proofreading staff help to find all the edits needed to make our product perfect. The diligence of Teri our account representative helps push our products through quickly, and we have been very pleased with Austex and the services they provide. - <b>T.T.</b>");

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

const Comments = props => {
  return (
    <div >
      <Comment comment={commentsArray} />
    </div>
  )
}

export default Comments;
