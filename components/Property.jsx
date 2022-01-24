import Link from 'next/link';
import image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified} from 'react-icons/goverified';
import millify from 'millify';

const Property = ({propery: {coverPhoto, price, rendGrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
   <Link href={`/property/${externalID}`} passHref>
      {title}
   </Link>
)

export default Property;



