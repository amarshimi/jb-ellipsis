import React from 'react';

export default function JBEllipsisText(props) {

    let text = props.text.length > props.limit ? props.text.substr(0, 150) + '...' : props.text
    return (
        <div> {text} </div>
    )

}