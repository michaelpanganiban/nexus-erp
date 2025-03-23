import React from 'react';

export interface ComponentRegistryInterface {
    Default: () => React.JSX.Element,
    EditUserFormComponent: () => React.JSX.Element,
    AddUserFormComponent: () => React.JSX.Element,
    // You can add more components here, ensuring the keys match the component names
}