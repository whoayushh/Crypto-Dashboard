import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
            <Stack spacing={6}>
            <Text fontWeight="medium" fontSize="sm">
                You will receive response within 24 hours of time of submit.
            </Text>
            <HStack
            flexDir={{
                base:"column",
                md :"row",
        
            }}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter Your name"/>
                
            </FormControl>
            <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input placeholder="Enter your surname" />
                
            </FormControl>
            
            </HStack>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter your mail" />
                
            </FormControl>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Input placeholder="Enter your message" />
                
            </FormControl>
            <Checkbox defaultChecked>
                <Text fontSize="xs">
                I agree with
                <Box as="span" color="p.purple">Terms & Condition</Box>
                </Text>
            </Checkbox>
            <Stack>
                <Button fontSize="sm">Send a Message</Button>
                <Button fontSize="sm" colorScheme="gray">Book a meeting</Button>
            </Stack>
            </Stack>
        </Card> 
  )
}

export default ContactCard