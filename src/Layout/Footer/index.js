import { Box } from '@mui/material';
import React from 'react';
import { StyledLink } from '../../Component/StyledLink';
import { Banner } from '../../Component/Banner';

const GroupLink = function ( props ) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 40,
            mb: 40,

        }}>
            { props.links.map(link => <StyledLink href={link.ref} mb={5}>{ link.name }</StyledLink>) }
        </Box>
    )
}

export const Footer = function () {
    return (
        <Box>
                
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pl: '10%',
                pr: '10%',
                minHeight: 230,
                borderTop: 2,
                borderBottom: 2,
                borderColor: 'primary.main',
            }}>
                <GroupLink 
                    links={
                        [
                            { 
                                name: 'Terms condition',
                                ref: '/',
                            }, 
                            {
                                name: 'Privacy policy',
                                res: '/'
                            },
                            {
                                name: 'Shipping Policy',
                                ref: '/'
                            }, 
                            {
                                name: 'Refuse Policy',
                                ref: '/'
                            }
                        ]
                    }>
                </GroupLink>
                <GroupLink 
                    links={
                        [
                            { 
                                name: 'Cookie Policy',
                                ref: '/',
                            }, 
                            {
                                name: 'FAQ',
                                res: '/'
                            },
                            {
                                name: 'Payment method',
                                ref: '/'
                            }
                        ]
                    }>
                </GroupLink>
                <GroupLink 
                    links={
                        [
                            { 
                                name: 'Address',
                                ref: '/',
                            }, 
                            {
                                name: '500 Terry Francois St. San Francisco, CA 94158',
                                res: '/'
                            },
                        ]
                    }>
                </GroupLink>
                <GroupLink 
                    links={
                        [
                            { 
                                name: 'Contact:',
                                ref: '/',
                            }, 
                            {
                                name: 'info@mysite.com',
                                res: '/'
                            },
                            {
                                name: '123-456-7890',
                                ref: '/'
                            }
                        ]
                    }>
                </GroupLink>
            </Box>
            <Banner height={50} content='© 2023 by Pure Flave. Proudly created with Wix.com'></Banner>
        </Box>
    )
}