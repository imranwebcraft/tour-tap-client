import PropTypes from 'prop-types';

const Container = ({ children }) => {
	return <div className="max-w-[1250px] mx-auto px-3">{children}</div>;
};

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
