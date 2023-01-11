import React from 'react';

const withHeight = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const { height, border, ...otherProps } = this.props;
            return <WrappedComponent style={{ height, border }} {...otherProps} />;
        }
    }
}

const MyHeightDiv = withHeight(({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>
));

export default MyHeightDiv;
