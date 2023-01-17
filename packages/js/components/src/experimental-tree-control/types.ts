export interface Item {
	parent?: string;
	value: string;
	label: string;
}

export interface LinkedTree {
	parent?: LinkedTree;
	data: Item;
	children: LinkedTree[];
}

export type TreeProps = React.DetailedHTMLProps<
	React.OlHTMLAttributes< HTMLOListElement >,
	HTMLOListElement
> & {
	level?: number;
	items: LinkedTree[];
	/**
	 * It gives a way to render a different Element as the
	 * tree item label.
	 *
	 * @example
	 * <Tree
	 * 	getItemLabel={ ( item ) => <span>${ item.data.label }</span> }
	 * />
	 *
	 * @param item The current rendering tree item
	 *
	 * @see {@link LinkedTree}
	 */
	getItemLabel?( item: LinkedTree ): JSX.Element;
	/**
	 * It gives the possibility to control the tree item
	 * expand/collapse on render from outside the tree.
	 * Make sure to cache the function to improve performance.
	 *
	 * @example
	 * <Tree
	 * 	isItemExpanded={ useCallback(
	 * 		( item ) => checkExpanded( item, text ),
	 * 		[ text ]
	 * 	) }
	 * />
	 *
	 * @param item The current linked tree item, useful to
	 * traverse the entire linked tree from this item.
	 *
	 * @see {@link LinkedTree}
	 */
	isItemExpanded?( item: LinkedTree ): boolean;
};

export type TreeItemProps = React.DetailedHTMLProps<
	React.LiHTMLAttributes< HTMLLIElement >,
	HTMLLIElement
> & {
	level: number;
	item: LinkedTree;
	getLabel?( item: LinkedTree ): JSX.Element;
	isExpanded?( item: LinkedTree ): boolean;
};

export type TreeControlProps = Omit< TreeProps, 'items' | 'level' > & {
	items: Item[];
};
