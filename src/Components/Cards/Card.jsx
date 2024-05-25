import React from 'react';
import './style.css';
import collegesData from '../../CollegeData';

const Card = ({ data }) => {
    return (
        <div>
            <div className='card'>
                <div className="col CDrank">
                    #{data.CDrank}
                </div>
                <div className="col name">
                    <div className="featured">
                        {data.featured ? "featured" : null}
                    </div>
                    <h1>{data.college.name}</h1>
                    <p>{data.college.location}</p>
                    <div className="button">Apply Now -</div>
                </div>
                <div className="col fees">
                    <h4>RS {data.fees}</h4>
                    <p>B.E / BTech</p>
                </div>
                <div className="col placement">
                    <h4>Average</h4>
                    <p>RS {data.placements.Average}</p>
                    <h4>Highest</h4>
                    <p>RS {data.placements.Highest}</p>
                </div>
                <div className="col review">
                    <h4>{data.userReviews}</h4>
                    <p>Reviews</p>
                </div>
                <div className="col ranking">
                    <h1>#{data.ranking} in India</h1>
                    <h1>2023</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;
