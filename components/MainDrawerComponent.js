import React from 'react'

import {StyleSheet, Text, View, Alert} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';

export default class MainDrawerComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    evaluateOuterDrawerListItems = items => {
        const drawerItems = {};
        items.forEach((item, index) => {
            let {key} = item;
            // Delimeter _
            // key => DataSearch_Basic to DataSearch
            key = key.substr(0, key.indexOf('_'));
            if (key.length) {
                if (drawerItems.hasOwnProperty(key)) {
                    drawerItems[key].end = index;
                } else {
                    drawerItems[key] = {
                        start: index,
                        end: 0,
                    };
                }
            }
        });
        return drawerItems;
    };

    renderMainDrawerComponents = mainDrawerItems =>
        Object.keys(mainDrawerItems).map(item => (
            <OuterDrawerItem
                key={item}
                label={item}
                onPress={() => {
                    this.setState({
                        currentComponent: item,
                        mainDrawer: false,
                    });
                }}
            />
        ));

    render() {
        const {items, ...restProps} = this.props;
        const {mainDrawer, currentComponent} = this.state;

        // evaluate the outer drawer list items
        const scopedItemsObject = this.evaluateOuterDrawerListItems(items);

        if (mainDrawer) {
            return (
                <ScrollView>
                    {this.renderMainDrawerComponents(scopedItemsObject)}
                </ScrollView>
            );
        }

        const index = scopedItemsObject[currentComponent];
        const scopedItemsArr = items.slice(index.start, index.end);

        return <DrawerItems items={scopedItemsArr} {...restProps} />
    }
}