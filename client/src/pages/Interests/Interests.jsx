import './Interests.css';
import { Link } from "react-router-dom";

function Interests() {
	var Selected = [];

	// function Next() {
	// 	if (!(Object.keys(Selected).length == 0)) {
	// 		<Link to="/login">Next</Link>
	// 	}
	// }

	function ClickMe(BtnName) {
		var Button = document.getElementById(BtnName);
		if (Button.State == "0") {
			Button.style.backgroundColor = "cadetblue";
			Button.style.color = "White";
			Button.State = "1";
			Selected.push(BtnName);
			console.log(Selected);
		}
		else {
			Button.style.backgroundColor = 'white';
			Button.style.color = "black";
			Button.State = "0";	
			var index = Selected.indexOf(BtnName);
			if (index > -1) {
				Selected.splice(index, 1);
			}
			console.log(Selected);
		}
		

	}
	return (
		<div className="main">
			<div className="outer">
				<div className="top-part">
					<h3 id="top-text">Choose your Interests</h3>
				</div>
				<div className="line"></div>
				<div className="Guide">
					<h4 className="GuideText">Or select from the below.</h4>
				</div>
				<div className="below-outer1">
					<div className="below-inner-1">
						<button
							className="Domains"
							id="Artificial Intelligence"
							State="1"
							onClick={() => {
								ClickMe("Artificial Intelligence");
							  }}
						>
							Artificial Intelligence
						</button>
						<button className="Domains" id="Machine Learning"
							State="0"
							onClick={() => {
								ClickMe("Machine Learning");
							  }}>
							Machine Learning
						</button>

						<button className="Domains" id="Web Development"
							State="0"
							onClick={() => {
								ClickMe("Web Development");
							  }}>
							Web Development
						</button>
						<button
							className="Domains"
							State="0"
							id="Natural Language Processing"
							onClick={() => {
								ClickMe("Natural Language Processing");
							  }}
						>
							Natural Language Processing
						</button>

						<button className="Domains"
							State="0"
							id="Deep Learining"
							onClick={() => {
								ClickMe("Deep Learining");
							  }}
						>
							Deep Learning
						</button>
					</div>

					<div className="below-inner-2">
						<button className="Domains"
							State="0"
							id="Big data Analytics"
							onClick={() => {
								ClickMe("Big data Analytics");
							  }}
						>
							Big data Analytics
						</button>
						<button className="Domains"
							State="0"
							id="Bioinformatics"
							onClick={() => {
								ClickMe("Bioinformatics");
							  }}
						>
							Bioinfirmatiics
						</button>

						<button className="Domains"
							State="0"
							id="Cyber Security"
							onClick={() => {
								ClickMe("Cyber Security");
							  }}
						>
							Cyber Security
						</button>
						<button className="Domains"
							State="0"
							id="Cloud Computing"
							onClick={() => {
								ClickMe("Cloud Computing");
							  }}
						>
							Cloud Computing
						</button>

						<button
							className="Domains"
							State="0"
							id="Mobile Application development"
							onClick={() => {
								ClickMe("Mobile Application development");
							  }}
						>
							Mobile Application Development
						</button>
					</div>

					<div className="below-inner-3">
						<button className="Domains"
							State="0"
							id="Data Sciece"
							onClick={() => {
								ClickMe("Data Sciece");
							  }}
						>
							Data Science
						</button>
						<button className="Domains"
							State="0"
							id="Database Management"
							onClick={() => {
								ClickMe("Database Management");
							  }}
						>
							Database Management
						</button>

						<button className="Domains"
							State="0"
							id="Computer Networks"
							onClick={() => {
								ClickMe("Computer Networks");
							  }}
						>
							Computer Networks
						</button>
						<button className="Domains"
							State="0"
							id="Virtual Reality"
							onClick={() => {
								ClickMe("Virtual Reality");
							  }}
						>
							Virtual Reality
						</button>

						<button className="Domains"
							State="0"
							id="Augmented Reality"
							onClick={() => {
								ClickMe("Augmented Reality");
							  }}>
							Augmented Reality
						</button>
					</div>

					<div className="below-inner-4">
						<button className="Domains"
							State="0"
							id="Internet Of Things"
							onClick={() => {
								ClickMe("Internet Of Things");
							  }}
						>
							Internet Of Things
						</button>
						<button className="Domains"
							State="0"
							id="Blockchain"
							onClick={() => {
								ClickMe("Blockchain");
							  }}
						>
							Blockchain
						</button>

						<button className="Domains"
							State="0"
							id="Automation"
							onClick={() => {
								ClickMe("Automation");
							  }}
						>
							Automation
						</button>
						<button className="Domains"
							State="0"
							id="Ethical Hacking"
							onClick={() => {
								ClickMe("Ethical Hacking");
							  }}
						>
							Ethical Hacking
						</button>

						<button className="Domains"
							State="0"
							id="AutoCAD"
							onClick={() => {
								ClickMe("AutoCAD");
							  }}
						>
							AutoCAD
						</button>
					</div>
				</div>
			</div>
			<div className="Buttons">
				<button className="Submit" ><Link to="/login">Next</Link></button>
			</div>
		</div>
	);
}

export default Interests;