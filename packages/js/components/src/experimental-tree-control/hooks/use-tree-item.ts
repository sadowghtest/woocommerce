/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { TreeItemProps } from '../types';
import { useExpander } from './use-expander';
import { useHighlighter } from './use-highlighter';
import { useSelection } from './use-selection';

export function useTreeItem( {
	item,
	level,
	multiple,
	selected,
	index,
	getLabel,
	isExpanded,
	isHighlighted,
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

	const highlighter = useHighlighter( {
		item,
		checkedStatus: selection.checkedStatus,
		multiple,
		isHighlighted,
	} );

	return {
		item,
		level: nextLevel,
		expander,
		selection,
		highlighter,
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
			isItemHighlighted: highlighter.isHighlighted,
			onSelect: selection.onSelectChildren,
			onRemove: selection.onRemoveChildren,
		},
	};
}
