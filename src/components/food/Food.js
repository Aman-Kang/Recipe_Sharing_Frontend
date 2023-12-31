import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import './Food.css';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import Reviews from '../reviews/Reviews';
import {Form,Button} from 'react-bootstrap';


const Food = ({recipes,getRecipeData,recipe,reviews,setReviews}) => {
    const currentRecipe = recipe;
    const [searchTerm,setSearchTerm] = useState("");

    const onTermChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const filteredRecipes = recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='recipe-carousel-container'>
            <Form>
                <Form.Group>
                    <Form.Label>Search for a recipe by its title:</Form.Label>
                    <Form.Control type="text" onChange={onTermChange} value={searchTerm}/>
                </Form.Group>
            </Form>
            <br/>
            <br/>
            {
                filteredRecipes.length === 0 ? (
                    <p>No recipes found for the given search term.</p>
                ):(
                <Carousel autoPlay={false} height={800} indicators={false} navButtonsAlwaysVisible={true}>
                    {filteredRecipes.map((recipe) => (
                        
                            <div key={recipe.id}>
                                <div className='recipe-card-container'>
                                    <div className='recipe-card'>
                                        <div className='recipe-image'>
                                            <img src={require('../../Food_Images/'+recipe.image_Name+'.jpg')} />
                                        </div>
                                        <div className='recipe-title'>
                                            <h4>{recipe.title}</h4>
                                        </div>
                                        <div className='recipe-detail'>
                                            <Tabs defaultIndex={0}>
                                                <TabList className='tab-list'>
                                                <Tab>Ingredients</Tab>
                                                <Tab>Recipe Instructions</Tab>
                                                <Tab>Write a Review</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className='recipe-ingredients'>
                                                        <ul>
                                                            {recipe.ingredients}
                                                        </ul>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className='recipe-instructions'>
                                                        <p>{recipe.instructions}</p>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div className="movie-review-button-container">
                                                        <Reviews getRecipeData={getRecipeData} recipe={currentRecipe} reviews={reviews} setReviews={setReviews} recipeId={recipe.id} />
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    ))}
                </Carousel>
            )}   
        </div>
    )
}
export default Food;