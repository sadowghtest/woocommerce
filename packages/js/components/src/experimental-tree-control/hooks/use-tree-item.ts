/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { TreeItemProps } from '../types';
import { useExpander } from './use-expander';
import { useSelection } from './use-selection';

export function useTreeItem( {
	item,
	level,
	multiple,
	selected,
	index,
	getLabel,
	isExpanded,
	onSelect,
	onRemove,
	...props
}: TreeItemProps ) {
	const nextLevel = level + 1;
	const nextHeadingPaddingLeft = ( level - 1 ) * 28 + 12;

	const expander = useExpander( {
		item,
		isExpanded,
	} );

	const selection = useSelection( {
		item,
		multiple,
		selected,
		level,
		index,
		onSelect,
		onRemove,
	} );

	return {
		item,
		level: nextLevel,
		expander,
		selection,
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
			multiple: selection.multiple,
			selected: selection.selected,
			getItemLabel: getLabel,
			isItemExpanded: isExpanded,
			onSelect: selection.onSelectChildren,
			onRemove: selection.onRemoveChildren,
		},
	};
}
