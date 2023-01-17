/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { TreeItemProps } from '../types';
import { useExpander } from './use-expander';

export function useTreeItem( {
	item,
	level,
	getLabel,
	isExpanded,
	...props
}: TreeItemProps ) {
	const nextLevel = level + 1;
	const nextHeadingPaddingLeft = ( level - 1 ) * 28 + 12;

	const expander = useExpander( {
		item,
		isExpanded,
	} );

	return {
		item,
		level: nextLevel,
		expander,
		getLabel,
		treeItemProps: {
			...props,
		},
		headingProps: {
			style: {
				paddingLeft: nextHeadingPaddingLeft,
			},
		},
		treeProps: {
			items: item.children,
			level: nextLevel,
			getItemLabel: getLabel,
			isItemExpanded: isExpanded,
		},
	};
}
