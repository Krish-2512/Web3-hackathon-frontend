
import React from 'react';
import { Link } from 'react-router-dom';
import "./MainVote.css";

const MainVote = () => {
    return (
        <div className="motive">
            <header>
                <div className="header-left">
                    <a className="logo" href='/'>
                        <span>Doc</span>
                        <span>Chain</span>
                    </a>
                </div>
                <div className="header-right">
                    <Link className="nav_component" to="/about">About Us</Link>
                </div>
            </header>
            <hr className="line" /><br />
            <div className="title">
                <h2>Transparent Governance</h2>
                <h2>Empowering Accountability and Impactful Decisions</h2>
            </div>
            <div className="Problems">
                <h2>Problems</h2>
                <div className="card-container">
                    <div className="card">
                        <h3 className="card-title">Inefficient Decision-Making in Funding Policies</h3>
                        <p className="card-description">Decision-making for fund allocation is often centralized, leading to delays and decisions that don't consider local needs.</p>
                        <a 
                            href="#decision" 
                            className="card-button"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("decision").scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                    <div className="card">
                        <h3 className="card-title">Limited Accountability Among Decision-Makers</h3>
                        <p className="card-description">Officers and policymakers often lack accountability, as decisions are not traceable to specific individuals or groups.</p>
                        <a 
                            href="#accountability" 
                            className="card-button"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("accountability").scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className="solutions">
                <h2>Solutions Addressed</h2>
                <hr className="line" /><br />
                <section id="decision" className="decision">
                    <div>
                    <div class="title-box">
  <h3>Inefficient Decision-Making in Funding Policies</h3>
</div>
                        <p>1. Introduces multi-level voting (district, state, central officers) to incorporate diverse perspectives.</p>
                        <p>2. Allows officers closer to the ground realities to participate in the decision-making process.</p>
                        <p>3. More courage for government officers to take fair decisions as no one knows who votes for whom.</p>
                    </div>
                    <div>
                        <h4>Impacts for the solutions</h4>
                        <p>1. Speeds up decision-making by distributing responsibility.</p>
                        <p>2. Ensures policies are tailored to local needs while maintaining oversight.</p>
                    </div>
                    <div className='voteid'><button className='vote'><Link to="/Voting">Vote Now</Link></button></div>
                </section>
                <hr className="line" /><br />
                <section id="accountability" className="accountability">
                    <div>
                    <div class="title-box">
                    <h3>Limited Accountability Among Decision-Makers</h3>
</div>
                        
                        <p>1. Records every vote and decision on the blockchain, linking them to specific officer roles.</p>
                        <p>2. Allows higher authorities to review voting trends and participation rates.</p>
                    </div>
                    <div>
                        <h4>Impacts for the solutions</h4>
                        <p>1. Ensures accountability for every decision made.</p>
                        <p>2. Discourages negligence and promotes responsible governance.</p>
                    </div>
                </section>
                <div className='voteid'><button className='vote'><Link to="/Voting">Vote Now</Link></button></div>
            </div>
        </div>
    );
};

export default MainVote;
