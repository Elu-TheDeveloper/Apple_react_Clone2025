import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function NavbarList({ LinkName, LinkUrl }) {
	return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={LinkUrl}>
				{LinkName}
			</Link>
		</li>
	);
}
NavbarList.propTypes = {
	LinkName: PropTypes.string.isRequired,
	LinkUrl: PropTypes.string.isRequired,
};
export default NavbarList;
