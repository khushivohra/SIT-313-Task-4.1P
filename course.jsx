import React from "react";
import "./course.css";
import DanSchultz from './images/DanSchultz.jpg'
import Data from "./card";
import Data2 from "./card2";

function Course() {

    return (
        <div className="name">

            {Data.map((item) => {
                return (
                    <div className="Card">
                        <div className="artImage">
                            <img src={item.src} alt="art" height={200} width={410} />
                        </div>
                        <div className="ArticleName">{item.articalName}</div>
                        <div className="Description">{item.description}</div>
                        <div className="Info">
                            <div className="Rating">
                                <button className="Star">{item.rating}</button></div>
                            <div className="AuthorName">{item.authorName}</div>
                        </div>
                    </div>
                )
            })}

            <div className="buttonDiv"><br></br>
                <div className="searchButton"><input type="text" name="search" id="Search" placeholder="See all Articles" /></div>
                <h2>Featured Tutorials</h2>
            </div>

            {Data2.map((item) => {
                return (
                    <div className="Card">
                        <div className="artImage">
                            <img src={item.src} alt="art" height={200} width={410} />
                        </div>
                        <div className="TutorialName">{item.TutorialName}</div>
                        <div className="Description">{item.description}</div>
                        <div className="Info">
                            <div className="Rating">
                                <button className="Star">{item.rating}</button></div>
                            <div className="username">{item.username}</div>
                        </div>
                    </div>
                )
            })}
            <div className="Div"><br></br>
                <input type="text" name="search" id="Search" placeholder="See all Tutorials" /></div><br></br>


        </div>




    );

}
export default Course