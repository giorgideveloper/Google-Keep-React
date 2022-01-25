import { Button, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const KeepBody = () => {
    return (
        <>
            <div className="container-fluid">
                <Row className=" my_nav">
                    <div className="col-lg-12">
                        <nav className="navbar fixed-top navbar-light bg-light">
                            <div className="container-fluid my_fluid">
                                <div className="col-lg-3"><a className="navbar-brand" href="#">Google Keep</a>
                                </div>
                                <div className="col-lg-3"><div className="form-outline search_my">
                                    <input type="search" id="form1" className="form-control" placeholder="Type query" aria-label="Search" />
                                </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Row>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="list-group my_list">
                            <Button type="button" className="list-group-item list-group-item-action">Note</Button>
                            <Button type="button" className="list-group-item list-group-item-action">Reminder</Button>
                            <Button type="button" className="list-group-item list-group-item-action">Archive</Button>
                            <Button type="button" className="list-group-item list-group-item-action">Basket</Button>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="col-lg-3">
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Your Note</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4">dadsa</textarea>
                            </div>
                        </div>
                        <Col lg="3">
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Col>
                    </div>
                </div>
            </div>
        </>
    )
}
export default KeepBody;