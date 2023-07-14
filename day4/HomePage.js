import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Crafters{' '}
            <Text as={'span'} color={'orange.400'}>
            'Corner
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          Crafters Corner is a heaven for creative minds, where artisans and crafters gather to showcase their unique handmade creations.
          </Text>
          <Stack spacing={6} direction={'row'}>
            
          
          </Stack>
          <Flex w={'full'}>
            <Illustration
              height={{ sm: '24rem', lg: '28rem' }}
              mt={{ base: 12, sm: 16 }}
            />
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props) => {
    return (
        <div>
          <img src="/images/wall1.jpg" alt="Image description" style={{ marginLeft: '70px',width:'100%' }}/>
        </div>   
    );
  };