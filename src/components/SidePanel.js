import React, { useEffect } from 'react';
import Collapsible from './Collapsible';
import Resizable from './Resizable';

function SidePanel(props) {
	return (
		<Resizable id={props.id} content={
			<Collapsible id={props.id+'hCollapse'} direction={props.direction} title={props.title} content={
				<Collapsible id={props.id+'vCollapse'} title={props.title} content={props.content} />
			} />
		} />
	);
}

export default SidePanel;
