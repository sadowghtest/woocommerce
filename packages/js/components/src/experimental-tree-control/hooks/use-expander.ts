/**
 * External dependencies
 */
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { TreeItemProps } from '../types';

export function useExpander( {
	isExpanded,
	item,
}: Pick< TreeItemProps, 'isExpanded' | 'item' > ) {
	const [ expanded, setExpanded ] = useState( false );

	useEffect( () => {
		if ( item.children?.length && typeof isExpanded === 'function' ) {
			setExpanded( isExpanded( item ) );
		}
	}, [ item, isExpanded ] );

	function onExpand() {
		setExpanded( true );
	}

	function onCollapse() {
		setExpanded( false );
	}

	function onToggleExpand() {
		setExpanded( ( prev ) => ! prev );
	}

	return { expanded, onExpand, onCollapse, onToggleExpand };
}
