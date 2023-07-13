import React from 'react';
import { Dropdown, Item } from '@spark-design/react';

const dropdown = () => {
    const array = ['option1', 'optio2', 'option3']
return (
    <Dropdown 
        aria-label="Page Size"
            name="pagesizeDropdown"
            placeholder="Select an Option"
            variant={'primary'}
            style={{"width":"150px"}}
>
            {array.map((pageSize) => (
<Item key={`page_size_${pageSize}`} textValue={`${pageSize}`}>
                {pageSize}
</Item>))}
    </Dropdown >
);
}
export default dropdown;