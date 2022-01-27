import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button} from '@chakra-ui/react';
import { useRouter} from 'next/router';
import { MDCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/FilterData';


const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const searchProperties = (filrerValues) => {

    }

    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map( (filter) =>(
                <Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={(e) => searchProperties({[filter.queryName] : e.target.value })}>

                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters;

