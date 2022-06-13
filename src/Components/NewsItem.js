import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardHeader, CardText,CardLink } from 'reactstrap';

export default class NewsItem extends Component {
    render() {


        // below elements are taken from the parent file which is newsComponent
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className='my-3'>
                <Card  >
                    <CardImg src={imageUrl?imageUrl:"https://img.etimg.com/thumb/msid-89364455,width-1070,height-580,imgsize-36638,overlay-economictimes/photo.jpg"} />
                    <CardHeader>{title}<span className="position-absolute top-0 badge rounded-pill bg-danger" style={{zIndex:1,right:"0"}}> {source} </span> </CardHeader>
                    <CardBody>
                        <CardText>
                            {description}
                        </CardText>
                        <CardLink href={newsUrl} className='btn btn-dark'>Read More...</CardLink>
                        <CardText><small>by {author} on {new Date (date).toGMTString()}</small></CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
