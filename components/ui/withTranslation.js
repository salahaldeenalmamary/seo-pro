// withTranslation.js

import React from 'react';
import { useTranslation } from 'react-i18next';

const withTranslation = (WrappedComponent) => {
  const WithTranslationComponent = (props) => {
    const { t } = useTranslation();

    // Recursively traverse and clone children to translate text nodes
    const translateChildren = (children) => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // If child is a valid React element, clone it and recursively translate its children
          return React.cloneElement(child, {
            children: translateChildren(child.props.children),
          });
        } else if (typeof child === 'string') {
          // If child is a text node, translate it
          return t(child);
        } else {
          return child;
        }
      });
    };

    return <WrappedComponent {...props}>{translateChildren(props.children)}</WrappedComponent>;
  };

  return WithTranslationComponent;
};

export default withTranslation;
