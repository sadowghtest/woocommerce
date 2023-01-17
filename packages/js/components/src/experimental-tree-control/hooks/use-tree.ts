/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { TreeProps } from '../types';

export function useTree( {
	ref,
	items,
	level = 1,
	multiple,
	selected,
	getItemLabel,
	isItemExpanded,
	isItemHighlighted,
	onSelect,
	onRemove,
	...props
}: TreeProps ) {
	return {
		level,
		items,
		treeProps: {
			...props,
		},
		treeItemProps: {
			level,
			multiple,
			selected,
			getLabel: getItemLabel,
			isExpanded: isItemExpanded,
			isHighlighted: isItemHighlighted,
			onSelect,
			onRemove,
		},
	};
}
