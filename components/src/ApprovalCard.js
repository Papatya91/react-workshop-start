import React from 'react';

const ApprovalCard = () => {
    return (
        <div className="uiCard">
            <div className="content">
            Are you sure?
            </div>
            <div className="extraContent">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
        </div>
    );

};


export default ApprovalCard;