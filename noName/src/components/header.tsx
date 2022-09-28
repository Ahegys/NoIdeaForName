import "../css/header.css"

function Header(){
	return (
	<div className="header">
			<li>
				<a href="#">Home</a>
				<a href="#">Contact</a>
				<a href="#">About</a>
				<button className="press">Press =)</button>
			</li>
		</div>
	)
}
export default Header;
