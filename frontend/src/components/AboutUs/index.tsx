import React from 'react';
import { Colors } from '../../theme/colors';
import { Text } from '../Text';
export const AboutUs = () => {
    return (
        <div className="flex justify-center my-5">
            <div className="flex flex-column w-10/12 items-center">
                <Text title="Who are we?" fontWeight={600} fontSize="2.5rem" />
                <Text
                    fontSize="1.875rem"
                    color={Colors.delanGray}
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sodales venenatis lectus donec. Nec aliquam malesuada scelerisque phasellus netus vivamus nec suspendisse neque. Sed purus vitae mattis volutpat, lectus ullamcorper. Sapien purus dui et vitae."
                    classname="" />
            </div>
        </div>
    )
}