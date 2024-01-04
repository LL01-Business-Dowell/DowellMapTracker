import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      {/* <Sidebar /> */}
      <main>{children}</main>
    </div>
  );
};
const layoutStyle = {
  width: "100%",
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
