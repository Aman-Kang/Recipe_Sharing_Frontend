import {useEffect,useRef} from 'react';
import api from '../../api/axiosConfig';
import {Container,Row,Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({getRecipeData,recipe,reviews,setReviews,recipeId}) => {
    const revText = useRef();
    
    const addReview = async(e) => {
        e.preventDefault();
        const rev = revText.current;
        console.log(rev.value);
        try{
            const response = await api.post("api/v1/reviews",{reviewBody:rev.value,ID:recipeId});
            const updatedReviews = [...reviews,{body:rev.value}];
            rev.value = "";
            setReviews(updatedReviews);
        }catch(err){
        }
    }

    useEffect(() => {
        getRecipeData(recipeId);
    },[]);
    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review?" defaultValue={""}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <hr />
                        </Col>
                    </Row>
                    </>
                }
                {
                    reviews?.map((r) => {
                        return(
                            <div key={r.id}>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                </Row>
                            </div>
                        )
                    })
                }
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;