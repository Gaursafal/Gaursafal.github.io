import React from 'react'
import Styles from './Projects.module.css'

class Projects extends React.Component{
    render() {
        return (
            <div className={Styles.main_container}>
                <h1 className ={Styles.heading}>Projects at Glance</h1>
                <br></br>
                <div className="container-fluid">
                <div className="row justify-content-center">

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF"}} >
                        <img src="Lrc.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Library Management</h5>
                            <p className="card-text">Library website, the user can see his details and the admin has access to the user's data and can make changes to them
accordingly. .</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/Library-Management" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Library-Management" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF"}} >
                        <img src="Shopping.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Shopping Cart</h5>
                            <p className="card-text">This website is a one-stop-shop for all your fashion and lifestyle needs, build using React & Express-js</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/Shopping-Cart" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Shopping-Cart" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                </div>


                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF"}}>
                        <img src="SpecialIssue.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">VentureBeat Clone</h5>
                            <p className="card-text">A leading source for transformative tech news and events that provide the deep context to make smart decisions.</p>
                            <div className="mt-auto">
                            <a href="https://github.com/Gaursafal/VentureBeat-Clone" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/VentureBeat-Clone" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                </div>        
                </div>

                <div className="row justify-content-center">  

                <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3" style = {{backgroundColor : "#D6DBDF"}}>
                        <img src="milap.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Milap Clone</h5>
                            <p className="card-text">Crowdfunding platform related to healthcare, education, sports, disaster relief, and other personal causes</p>
                            <div className="mt-auto">
                            <a href="https://milaap-clone-app.netlify.app/login" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Milaap-Clone-React" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div> 

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF"}} >
                        <img src="covid.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Covid-19 Tracker</h5>
                            <p className="card-text">Website to display current covid-19 cases across the world including total confirmed, active cases, recovered cases, and death toll.</p>
                            <div className="mt-auto">
                            <a href="https://gaursafal.github.io/Masai-Sprint-3/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Covid-19-Tracker" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>

                    <div className="card col-sm- col-md-9 col-lg-3 p-0 m-3"style = {{backgroundColor : "#D6DBDF"}} >
                        <img src="todo.png" className="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Todiost Clone</h5>
                            <p className="card-text">Todoist an app that helps millions of people organize work and life now has grown from a personal side project to a market-leading Swiss Army Knife of life organization. </p>
                            <div className="mt-auto">
                            <a href="https://gaursafal.github.io/Todoist-Clone/" className="btn btn-success btn-block ">Live</a>
                            <a href="https://github.com/Gaursafal/Todoist-Clone" className="btn btn-outline-dark btn-block ">Github link</a>
                            </div>
                        </div>
                    </div>   

                </div>

                </div>  
            </div>
        )
    }
}
export default Projects