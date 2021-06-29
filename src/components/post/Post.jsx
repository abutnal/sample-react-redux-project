import React, { useState } from "react";
import { Card } from 'react-bootstrap'
import Dialog from "../popup/Dialog";
const Post = (props) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true)
        setData(val)
    };

    return (<>
        <Card style={{ marginTop: "-1px", borderRadius: "0px" }}>
            <Card.Body>
                <Card.Title>{props.id}. {props.title}</Card.Title>
                <Card.Text>
                    {props.body}
                </Card.Text>
                <Card.Link style={{ cursor: 'pointer' }} onClick={() => handleShow(props)}>Read more...</Card.Link>
            </Card.Body>
        </Card>

        <Dialog
            show={show}
            handleClose={handleClose}
            data={data}
        />

    </>)
}

export default Post;